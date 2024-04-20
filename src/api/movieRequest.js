import axios from "axios";
import API from "./endpoint";

export const getMovies =(name)=> axios.get(`${API.OMDB_API}&s=${name || 'abcd'}`)

export const getMovie = (id) => axios.get(`${API.OMDB_API}&i=${id}`)