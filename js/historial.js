//funcion para redireccionar a la pagina principal
function redirectToMain(){
    window.location.href = '../index.html';
}

// Obtenenemos el historial del localStorage
const historial = JSON.parse(localStorage.getItem('historial')) || [];
const container = document.querySelector('#historial-container');

historial.forEach(pelicula => {
    const card = document.createElement('div');
    card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'col-xl-2');
    card.innerHTML = `
    <div class="card h-100 mx-auto text-center d-flex flex-column" style="max-width: 18rem;">
        <img src="https://image.tmdb.org/t/p/w500/${pelicula.posterPath}" class="card-img-top" alt="${pelicula.title}">
        <div class="card-body mt-auto">
            <h3 class="card-title">${pelicula.title}</h3>
        </div>
    </div>
`;
container.appendChild(card);
});