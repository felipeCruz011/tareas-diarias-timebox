// Variables
const dropdown = document.querySelector('.menu__dropdown');
const btnMenu = document.querySelector('.menu__btn-responsive');
const diasFaltantes = document.querySelector('.habitos__faltan-dias-numero');
const fullscreenButton = document.querySelector('.full-screen-btn');
const entrarSalirBtn = document.querySelector('.fa-compress-arrows-alt');


// EventListeners 
window.addEventListener('resize', ocultarResponsive);
fullscreenButton.addEventListener('click', enterFullscreen);
entrarSalirBtn.addEventListener('click', entrarSalirFullScreen);

// Funciones
function abrirMenu() {
    if (dropdown.className === "menu__dropdown aparecer") {
        dropdown.className = "menu__dropdown ocultar";
        btnMenu.className = 'menu__btn-responsive fas fa-bars';
    } else {
        dropdown.className = 'menu__dropdown aparecer';
        btnMenu.className = 'menu__btn-responsive fas fa-times';
    }   
}

function ocultarResponsive() {
    if (window.innerWidth > 700) {
        dropdown.className = "menu__dropdown ocultar";
        btnMenu.className = 'menu__btn-responsive fas fa-bars';
    }
}

// Intercalar la Clase Activo
let enlaces = document.querySelectorAll('.menu__enlaces');

enlaces.forEach((element) => {
    element.addEventListener('click', (event) => {
        enlaces.forEach((link) => {
            link.classList.remove('activo');
        });    
        event.target.classList.add('activo');
        cerrarLiMovil();
    });
});

// Cerrar Li movil cuando se da click en un Li en movil
function cerrarLiMovil() {
    setTimeout(function() {
        dropdown.className = "menu__dropdown ocultar";
        btnMenu.className = 'menu__btn-responsive fas fa-bars';
    },500);
}

// Circle progress bar 
function cargarProgressBar() {
    let circleProgress = new progressBar({
        type: "circle", //top, circle
        targetClass: "habitos__round-progress",
        textClass: "habitos__porcentaje-value",
        value: 30, //final value
        duration: 2000, //ms
        completeDuration: 500 //ms
    });
    setTimeout(() => {
        circleProgress.complete();
        console.log('hola');
    }, 2000);
}


// Animacion de dias faltantes
function cargarDiasFaltantes() {
    let timeFaltanteAnimation = 50;
    
    for (let i = 0; i < 61; i++) {
        timeFaltanteAnimation += 50;
        setTimeout(() => {
            diasFaltantes.innerText = `${i}`;
        }, timeFaltanteAnimation);
    }

    
    diasFaltantes.style.color = 'var(--red)';
    
}

// Entrar en modo full Screen si se esta navegando en movil

let fullscreenDiv    = document.querySelector(".container-all");
let fullscreenFunc   = fullscreenDiv.requestFullscreen;
if (!fullscreenFunc) {
    ['mozRequestFullScreen',
    'msRequestFullscreen',
        ].forEach(function (req) {
    fullscreenFunc = fullscreenFunc || fullscreenDiv[req];
    });
 }
function enterFullscreen() {
    fullscreenFunc.call(fullscreenDiv);
    animacionFullScreen();
}

fullscreenButton.addEventListener('click', enterFullscreen);


// Animacion para ocultar el mensaje de Full Screen 
let fullScreenInitial = document.querySelector('.full-screen');
function animacionFullScreen() {
    fullScreenInitial.style.opacity = "0";
    setTimeout(() => {
        cargarDiasFaltantes();
        cargarProgressBar();
    }, 2000);
    setTimeout(() => {
        fullScreenInitial.remove();
    }, 3000);
}

// Funcion para salir y entrar a Full Screen
function entrarSalirFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }
    }
}