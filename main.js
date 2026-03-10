const dice = document.getElementById('dice');
const rollBtn = document.getElementById('roll-btn');
const resultText = document.getElementById('result-text');
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// 테마 토글 기능
themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '라이트 모드로 전환';
    } else {
        themeBtn.textContent = '다크 모드로 전환';
    }
});

// 주사위 굴리기 기능
function rollDice() {
    // 버튼 비활성화
    rollBtn.disabled = true;
    
    // 애니메이션 추가
    dice.classList.add('rolling');
    resultText.textContent = '굴리는 중...';

    setTimeout(() => {
        // 랜덤 숫자 생성 (1-6)
        const value = Math.floor(Math.random() * 6) + 1;
        
        // 주사위 눈 업데이트
        updateDiceUI(value);
        
        // 애니메이션 제거
        dice.classList.remove('rolling');
        
        // 결과 텍스트 업데이트
        resultText.textContent = `결과: ${value}`;
        
        // 버튼 활성화
        rollBtn.disabled = false;
    }, 500);
}

function updateDiceUI(value) {
    dice.setAttribute('data-value', value);
    dice.innerHTML = '';
    
    for (let i = 0; i < value; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dice.appendChild(dot);
    }
}

rollBtn.addEventListener('click', rollDice);

// 초기화
updateDiceUI(1);
