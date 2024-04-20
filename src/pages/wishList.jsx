import { IconButton, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { setWishlistName } from "../actions";
import MovieCard from "../components/movieCard";
import MovieDatailDialog from "../components/movieDetails";
import Header from '../components/header'
const WishList = () => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = React.useState(false);
  const wishlistName = useSelector((state) => state.wishlist.name);
  const myWishList = useSelector((state) => state.wishlist.movies);
  const [input, setInput] = useState(wishlistName || "");
  const nullInput = input.trim();
  const clickForEdit = () => setIsEdit(true);
 
  const handleSave = () => {
    setIsEdit(false)
    dispatch(setWishlistName(input));
  };
  
  return (
    <Box sx={{ padding: 3 }}>
      <Paper shadow={3} sx={{display: "flex", padding:3, alignItems:"center"}}>
        {!isEdit ? (
          <Typography variant="h4">{wishlistName}</Typography>
        ) : (
          <TextField
           fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="outlined-basic"
            hiddenLabel
             placeholder="Enter wishlist name"
            variant="outlined"
          />
        )}
        <IconButton
          disabled={isEdit && !nullInput}
          onClick={isEdit ? handleSave : clickForEdit}
        >
          {isEdit ? <DoneAllIcon /> : <EditIcon />}
        </IconButton>
      </Paper>

      {
        myWishList.length ? <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          maxHeight: "70vh",
          overflowY: "auto",
          justifyContent: "start",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {myWishList.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
        <MovieDatailDialog/>
      </Box> : <Header />
      }
      
    </Box>
  );
};

export default WishList;
