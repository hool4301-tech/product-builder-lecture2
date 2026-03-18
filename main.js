const numbersContainer = document.getElementById('numbers-container');
const generateBtn = document.getElementById('generate-btn');
const statusText = document.getElementById('status-text');
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// 테마 토글 기능
themeBtn.addEventListener('click', () => {
    body.classList.toggle('blue-mode');
    if (body.classList.contains('blue-mode')) {
        themeBtn.textContent = '기본 모드로 전환';
    } else {
        themeBtn.textContent = '블루 모드로 전환';
    }
});

// 로또 번호 생성 기능
function generateLottoNumbers() {
    // 버튼 비활성화
    generateBtn.disabled = true;
    statusText.textContent = '번호를 추첨하고 있습니다...';
    
    // 기존 번호 삭제 및 플레이스홀더 표시
    numbersContainer.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        const placeholder = document.createElement('div');
        placeholder.className = 'number-placeholder';
        placeholder.textContent = '?';
        numbersContainer.appendChild(placeholder);
    }

    // 1~45 사이의 중복 없는 6개 숫자 생성
    const numbers = [];
    while (numbers.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    
    // 오름차순 정렬
    numbers.sort((a, b) => a - b);

    // 순차적으로 번호 표시 (애니메이션)
    numbers.forEach((num, index) => {
        setTimeout(() => {
            const placeholders = document.querySelectorAll('.number-placeholder');
            if (placeholders[index]) {
                const ball = document.createElement('div');
                ball.className = 'lotto-ball animate';
                ball.textContent = num;
                
                // 해당 위치의 플레이스홀더를 공으로 교체
                numbersContainer.replaceChild(ball, placeholders[index]);
            }

            // 모든 번호가 표시되었을 때
            if (index === numbers.length - 1) {
                generateBtn.disabled = false;
                statusText.textContent = '행운의 번호가 생성되었습니다!';
            }
        }, (index + 1) * 400); // 0.4초 간격으로 표시
    });
}

generateBtn.addEventListener('click', generateLottoNumbers);
