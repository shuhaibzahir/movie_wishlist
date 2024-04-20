
const API_KEY =  import.meta.env.VITE_OMDB_API_KEY || "<API_KEY>";
const API = {
    OMDB_API: `http://www.omdbapi.com/?apikey=${API_KEY}`,
}

export default API;