//funcion para redireccionar a la pagina principal
function redirectToMain(){
    window.location.href = '../index.html';
}

// Obtenenemos el historial del localStorage
const historial = JSON.parse(localStorage.getItem('historial')) || [];
const container = document.querySelector('#historial-container');

