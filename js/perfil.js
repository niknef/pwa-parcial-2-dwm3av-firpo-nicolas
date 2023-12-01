

//funcion para redireccionar a la pagina de historial
function redirectToMain() {
    window.location.href = '../index.html';
};

document.addEventListener('DOMContentLoaded', function () {
    const userEmail = "demo@davinci.com.ar";

    fetch(`../php/backend.php?email=${userEmail}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const usuario = data[0];
                document.getElementById('nombreApellido').innerText = `${usuario.nombre} ${usuario.apellido}`;
                document.getElementById('materia').innerText = usuario.materia;
                document.getElementById('comision').innerText = usuario.comision;

                // Obtener la imagen y establecer el atributo src
                const imagenPerfil = document.getElementById('imagenPerfil');
                imagenPerfil.src = `../img/${usuario.imagen}`;
            } else {
                console.error('Error: No se encontraron datos para el usuario.');
            }
        })
        .catch(error => console.error('Error:', error));
});