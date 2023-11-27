let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

//Funciones del pagination

btnAnterior.addEventListener('click', () => {
    if (pagina > 1) {
        pagina--;
        fetchPelicula();
    }
});

btnSiguiente.addEventListener('click', () => { 
    if(pagina < 1000){
        pagina++;
        fetchPelicula();
    }
   
});





async function fetchPelicula() {
    try {

        //Creamos una constante con la URL de la API
        const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=8950ddf8d59170094bc97d0561e3a66f&language=es-ES&page=${pagina}`;

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
        }

        const data = await response.json();
            console.log("Data:", data);
        const peliculas = data.results || [];
            console.log("Peliculas:", peliculas);
            renderPeliculas(peliculas);
    } catch (error) {
        console.error(error);
    }
};

function renderPeliculas(peliculas) {
    const container = document.querySelector('#container');
    let html = '';

    peliculas.forEach(pelicula => {
        html += `
        <div class="col">
            <div class="card h-100 mx-auto text-center d-flex align-items-center" style="max-width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="${pelicula.title}">
            <div class="card-body">
                <h3 class="card-title">${pelicula.title}</h3>
            </div>
        </div>
    </div>
    
        `;
    });

    container.innerHTML = html;
};

fetchPelicula();