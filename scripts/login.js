let log = document.querySelector('#Login');
let reg = document.querySelector('#Register');
let btn = document.querySelector('#btn');

let initialState = localStorage.getItem('initialState') || 'login';

function applyTransitions() {
  log.style.transition = 'left 0.5s';
  reg.style.transition = 'left 0.5s';
}

if (initialState === 'login') {
    login();
} else {
    register();
}

function register() {
    log.style.left = '-400px';
    reg.style.left = '50px';
    btn.style.left = '110px';
}

function login() {
    log.style.left = '50px';
    reg.style.left = '450px';
    btn.style.left = '0px';
}

setTimeout(applyTransitions, 100);