import {
  Typography,
  IconButton,
  Paper,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Button,
  CardHeader,
  Avatar,
  FormControlLabel,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, setPrimary, resetTheme } from "../actions/themeActions";
import { setLogout } from "../actions/userAction";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DarkLightSwitch from "./darkLightSwitch";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { resetMovie, resetWishlist } from "../actions";

const LeftSideComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const isAuthenticate = useSelector((state) => state.user.logined);
  const userEmail = useSelector((state) => state.user.userEmail);
  const theme = useSelector((state) => state.theme?.theme || "light");
  const primary = useSelector((state) => state.theme?.primary);
  const wishListName = useSelector((state) => state.wishlist.name);
  const changeTheme = (theme) => dispatch(setTheme(theme));
  const logout = () => {
    dispatch(setLogout());
    navigate("/login");
    dispatch(resetMovie());
    dispatch(resetTheme());
    dispatch(resetWishlist());
  };

  const handleClick = (path) => {
    navigate(path);
  };

  const handleChangePrimaryColor = (e) => {
    dispatch(setPrimary(e.target.value));
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: "100%",
        minHeight: "100vh",
      }}
    >
      <div>
        <Typography
          variant="h6"
          padding={3}
          textAlign={"center"}
          color={"primary"}
          component="h1"
        >
          My Wish List
        </Typography>
        <Divider />
        <List>
          <ListItemButton selected={true} onClick={() => handleClick("/")}>
            <ListItemIcon>
              <Home color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              primaryTypographyProps={{
                color: "primary",
                fontWeight: "medium",
              }}
            />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding onClick={() => handleClick("/wishlist")}>
            <ListItemButton>
              <ListItemText primary={wishListName} />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <div>
        <Box sx={{ display: "flex", justifyContent: "flex-end", paddingX: 3 }}>
          <input
            type="color"
            id="favcolor"
            value={primary}
            style={{ marginRight: "20px" }}
            onChange={handleChangePrimaryColor}
            name="favcolor"
          />

          <FormControlLabel
            sx={{ marginRight: 1 }}
            control={
              <DarkLightSwitch
                onChange={(e) => {
                  changeTheme(e.target.checked ? "dark" : "light");
                }}
              />
            }
            label={theme === "light" ? "Light" : "Dark"}
          />

          <Button startIcon={<LogoutIcon />} variant="filled" onClick={logout}>
            Logout
          </Button>
        </Box>

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "primary" }} aria-label="recipe">
              {userEmail[0]?.toUpperCase() || "U"}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={userEmail?.toUpperCase()}
          subheader={"welcome to movie wish list"}
        />
      </div>
    </Paper>
  );
};

export default LeftSideComponent;
