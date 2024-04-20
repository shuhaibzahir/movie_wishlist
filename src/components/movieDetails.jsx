import * as React from "react";
 import Dialog from "@mui/material/Dialog";
 import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist, setSelectMovie } from "../actions";
import { getMovie } from "../api/movieRequest";
import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { addWishListIntoLocalStorage, removeWishListFromLocalStorage } from "../helper/wishlist";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MovieDatailDialog() {
  const dispatch = useDispatch();

  const selectedImDbId = useSelector((state) => state.movie.selectedImDbId);
  const selectedMovies = useSelector(state=> state.wishlist?.moviesIds || [])
  const wishListName = useSelector(state => state.wishlist?.name || "")


  const [loading, setLoading] = React.useState(true);
  const [movie, setMovie] = React.useState([]);
  const movieExistInWishList = selectedMovies.includes(movie.imdbID);
  const userEmail = useSelector((state)=> state.user.userEmail)

  const handleAddToWishlist = () => {
    const data = {Title:movie.Title, imdbID: movie.imdbID, Poster:movie.Poster}
  addWishListIntoLocalStorage(data, userEmail, wishListName)
    dispatch(addToWishlist(data));
  };

  const handleRemoveFromWishlist = () => {
    removeWishListFromLocalStorage(movie.imdbID, userEmail, wishListName)
    dispatch(removeFromWishlist({id:movie.imdbID}));
  };

  React.useEffect(() => {
    if (selectedImDbId) {
      getMovie(selectedImDbId)
        .then((res) => {
          setMovie(res.data);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(true);
    }
  }, [selectedImDbId]);

  const handleClose = () => {
    dispatch(setSelectMovie(null));
  };
  return (
    <React.Fragment>
      <Dialog
        open={selectedImDbId ? true :false}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {loading ? (
          <Box sx={{padding:3}}>
               <Skeleton variant="rectangular" color="secondary" width={500} height={500} />
          </Box>
        ) : (
          <>
            <DialogContent>
              <Card sx={{minWidth: 500,}}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="194"
                    image={movie.Poster}
                    alt="Paella dish"
                  />
                  <Typography gutterBottom variant="h5" component="h2">
                    {movie.Title}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Year: {movie.Year}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Rated: {movie.Rated}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Released: {movie.Released}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Runtime: {movie.Runtime}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Genre: {movie.Genre}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
        <IconButton aria-label="add to favorites"   onClick={movieExistInWishList ? handleRemoveFromWishlist : handleAddToWishlist}  color={movieExistInWishList ? "error" : ""}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
              </Card>
            </DialogContent>
           
          </>
        )}
      </Dialog>
    </React.Fragment>
  );
}
