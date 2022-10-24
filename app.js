// *** SET INITIAL POWER VALUE ***
let power = 0;

// *** SELECT THE COUNT VALUE FOR THE HTML ***
const countValue = document.getElementById('countValue');

// *** SELECT THE BUTTONS ***
const btns = document.querySelectorAll('.btn');

// *** ADD EVENT LISTENERS TO THE BUTTONS ***
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btn = e.currentTarget;
        if (btn.classList.contains('increase')) {
            power++;
        }
        else if (btn.classList.contains('decrease')){
            power--;
        }
        else if (btn.classList.contains('reset')) {
            power = 0;
        }
        countValue.textContent = power;
    });

});

