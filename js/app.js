//Creamos una constante con la URL de la API
const API_URL = 'https://api.themoviedb.org/3/movie/11?api_key=8950ddf8d59170094bc97d0561e3a66f';


async function fetchPelicula(){
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        const peliculas = data.results;
        console.log(peliculas);
    } catch (error) {
        console.error(error);
    }
};



fetchPelicula();