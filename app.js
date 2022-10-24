// *** SET INITIAL POWER VALUE ***
let power = 0;

// SELECT CURRENT POWER SPAN ***
const currentPowerSpan = document.querySelector('#current-power');

// *** SELECT POWER SPAN H1 ***
let heading = document.querySelector('.power-span');

// *** SELECT THE COUNT VALUE FOR THE HTML ***
const countValue = document.getElementById('countValue');

// *** SELECT THE CONTAINER FOR ANIMATION ***
const container = document.querySelector('.container');


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
            countValue.style.display = 'inline-block';
            currentPowerSpan.textContent = '';
            container.style.boxShadow = '1px 1px 25px 0px #E30074';
            container.style.transition = 'all .75s ease-in-out';
        }
        if(power === 0) {
            container.style.boxShadow = '1px 1px 25px 0px #E30074'

        }
        if(power === 1) {
            container.style.transition = 'all 0.5s ease-in-out';
            container.style.boxShadow = '1px 1px 25px 2vw #E30074';
        }
        if(power === 2) {
            container.style.transition = 'all 0.5s ease-in-out';
            container.style.boxShadow = '1px 1px 25px 5vw #E30074';
        }
        if(power === 3) {
            container.style.transition = 'all 0.5s ease-in-out';
            container.style.boxShadow = '1px 1px 25px 10vw #E30074';
        }
        if(power === 4) {
            container.style.transition = 'all 0.5s ease-in-out';
            container.style.boxShadow = '1px 1px 25px 15vw #E30074';
        }
        if(power === 5) {
            container.style.transition = 'all 0.5s ease-in-out';
            container.style.boxShadow = '1px 1px 25px 100vw #E30074';
            currentPowerSpan.textContent = "Max Power Achieved!"
            countValue.style.display = 'none';
        }


        if(power === -1) {
            container.style.transition = 'all 0.5s ease-in-out';
            container.style.boxShadow = '1px 1px 25px 2vw #fff';
        }
        if(power === -2) {
            container.style.transition = 'all 0.5s ease-in-out';
            container.style.boxShadow = '1px 1px 25px 5vw #fff';
        }
        if(power === -3) {
            container.style.transition = 'all 0.5s ease-in-out';
            container.style.boxShadow = '1px 1px 25px 10vw #fff';
        }
        if(power === -4) {
            container.style.transition = 'all 0.5s ease-in-out';
            container.style.boxShadow = '1px 1px 25px 15vw #fff';
        }
        if(power === -5) {
            container.style.transition = 'all 0.5s ease-in-out';
            container.style.boxShadow = '1px 1px 25px 100vw #fff';
            currentPowerSpan.textContent = " Power Fully drained !"
            countValue.style.display = 'none';
        }

       
        countValue.textContent = power;
    });

});

