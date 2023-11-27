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

//Función para obtener los datos de la API
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


//Función para renderizar las peliculas
function renderPeliculas(peliculas) {
    const container = document.querySelector('#container');
    let html = '';

    peliculas.forEach(pelicula => {
        html += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="card h-100 mx-auto text-center d-flex flex-column" style="max-width: 18rem;">
                    <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="${pelicula.title}">
                    <div class="card-body mt-auto">
                        <h3 class="card-title">${pelicula.title}</h3>  
                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">Mi lista +</button>
                            
                            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#peliculaModal" onclick='openModal("${pelicula.title}", "${pelicula.poster_path}", "${pelicula.release_date}", "${pelicula.vote_average}", "${pelicula.overview}", "${pelicula.id}")'>Más info</button>
                        </div>


                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
};

//Funcion para abrir el modal
function openModal(title, posterPath, releaseDate, voteAverage, overview, id) {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="modal-header">
            <span class="badge bg-secondary me-2">${voteAverage}</span>
            <h4 class="modal-title" id="exampleModalLabel">${title}</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div>
                <img src="https://image.tmdb.org/t/p/w500/${posterPath}" class="img-fluid rounded bor" alt="${title}">
                <p class="mt-3">${overview}</p>
                <p>Fecha de lanzamiento: ${releaseDate}</p>
            </div>
        </div>
    `;
/// Guardamos la película en el historial
const pelicula = {
    title,
    posterPath,
    releaseDate,
    voteAverage,
    overview,
    id
};
let historial = JSON.parse(localStorage.getItem('historial')) || [];

const peliculaEncontrada = historial.find(pelicula => pelicula.id === id);

    if (!peliculaEncontrada) {
        historial.push(pelicula);
        // Actualizamos el historial en localStorage
        localStorage.setItem('historial', JSON.stringify(historial));
        console.log(`Pelicula ${title} guardado en el historial.`);
    }else {
        console.log(`Pelicula ${title} ya existe en el historial.`);
    }
    };

//funcion para redireccionar a la pagina de historial
function redirectToHistorial() {
    window.location.href = './html/historial.html';
};


fetchPelicula();