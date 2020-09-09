// Variables
let dropdown = document.querySelector('.menu__dropdown');
let btnMenu = document.querySelector('.menu__btn-responsive');

// EventListeners 
window.addEventListener('resize', ocultarResponsive);

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