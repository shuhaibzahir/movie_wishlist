import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

import Header from "../components/header";
import Search from "../components/search";
import { getMovies } from "../api/movieRequest";
import MovieCard from "../components/movieCard";
import { useSelector } from "react-redux";
import MovieDatailDialog from "../components/movieDetails";
 import { Alert } from "@mui/material";
export default function BasicGrid() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const movieName = useSelector((state) => state.movie.searchText);

  useEffect(() => {
    setError('');
    getMovies(movieName).then((response) => {
      if(response.data.Search){
        setMovies(response.data.Search);
      }else{
        setMovies([]);
        setError(response.data.Error);
      }
    }).catch((error) => {
      setError(error.message);
    });
  }, [movieName]);

  return (
    <Box sx={{ padding: 3 }}>
      {error && <Alert severity="error">{error}</Alert>}
      <Header />
      <Search />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          maxHeight: "60vh",
          overflowY: "auto",
          justifyContent: "start",
        
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
        <MovieDatailDialog/>
      </Box>
    </Box>
  );
}
