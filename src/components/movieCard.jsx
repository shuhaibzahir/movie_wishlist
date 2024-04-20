/* eslint-disable react/prop-types */
 
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist, setSelectMovie } from "../actions";
import { addWishListIntoLocalStorage, removeWishListFromLocalStorage } from "../helper/wishlist";

// eslint-disable-next-line react/prop-types
export default function MovieCard({ movie }) {
 const dispatch = useDispatch()
 const userEmail = useSelector((state)=> state.user.userEmail)
 const wishListName = useSelector(state => state.wishlist?.name || "")
 const selectedMovies = useSelector(state=> state.wishlist?.moviesIds || [])
 const movieExistInWishList = selectedMovies.includes(movie.imdbID);
  const handleExpandClick = () => {
    dispatch(setSelectMovie(movie.imdbID));
  };

  const handleAddToWishlist = () => {
    const data = {Title:movie.Title, imdbID: movie.imdbID, Poster:movie.Poster}
    addWishListIntoLocalStorage(data, userEmail, wishListName)
    dispatch(addToWishlist(data));
  };

  const handleRemoveFromWishlist = () => {
    removeWishListFromLocalStorage(movie.imdbID, userEmail, wishListName)
    dispatch(removeFromWishlist({id:movie.imdbID}));
  };

  return (
    <Card
      sx={{ maxWidth: 345, cursor: "pointer", margin: 1 }}
      shadow={3}
    >
      <CardMedia
        onClick={handleExpandClick}
        component="img"
        height="194"
        image={movie.Poster}
        alt="Paella dish"
      />
      <CardContent sx={{ minWidth: 345, maxWidth: 345 }}>
        <Typography variant="body2" color="text.secondary">
          {movie.Title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
        <IconButton onClick={movieExistInWishList ? handleRemoveFromWishlist : handleAddToWishlist}  color={ movieExistInWishList? "error" : ""} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
