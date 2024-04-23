 import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
 import Typography from '@mui/material/Typography';
 import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ActionAreaCard() {
  return (
    <Card>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
           <Typography variant='span'>Welcome to</Typography> <Typography color={"primary"} variant='span'>Wish list</Typography>
          </Typography>
          <Typography variant="div" sx={{display:"flex", alignItems:"center"}} color="text.secondary">
           Browse movie, add them to Watchlist and share them with friends
           Just click the <FavoriteIcon sx={{marginX:1}}/> to add moview
          </Typography>
        </CardContent>
        
    </Card>
  );
}
