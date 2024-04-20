import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system"; 
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovieSearchText } from "../actions";

const SearchBox = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.movie.searchText);
    const [searchText, setSearchText] = useState(text);
    const searchTextExist = searchText.trim();
    const handleSearch = ()=>{
        dispatch(setMovieSearchText(searchText));
    }

    const handleClear = ()=>{
      setSearchText("");
      dispatch(setMovieSearchText(""));
    }

    const handleSearcchInput = (e) => {
      setSearchText(e.target.value);
    }
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems:"center", paddingY: 3 }}>
   
      <TextField
 
        onChange={handleSearcchInput}
        value={searchText}
        fullWidth
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder="search movie..."
        variant="outlined"
        size="small"
      />
     {
        searchTextExist && <Button onClick={handleClear} variant="outlined" color="error" sx={{marginX:2}}>
        clear
      </Button>
     }
      <Button variant="contained" onClick={handleSearch} disabled={!searchTextExist} sx={{ borderLeft: "none" }}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBox;
