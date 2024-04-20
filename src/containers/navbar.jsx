import {  createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box"; 
import Grid from "@mui/material/Grid"; 
import {  useSelector } from "react-redux";
import { grey } from '@mui/material/colors';

import SideBar from "../components/sidebar";
 
// eslint-disable-next-line react/prop-types
export default function Dashboard({ children }) {
  // const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme?.theme || "light");
  const primary = useSelector((state) => state.theme?.primary);
  const MUITHEME = createTheme({ palette: { mode: theme , primary: {
    main: primary
  },} });
  const isAuthenticate = useSelector((state) => state.user.logined);
 

  return (
    <ThemeProvider theme={MUITHEME}>
      <Box>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container >
           {
            isAuthenticate && (
              <Grid item xs={3}>
                <SideBar />
              </Grid>
            )
           }
            <Grid item xs={isAuthenticate ? 9 : 12} bgcolor={isAuthenticate ?  theme == "light" ? grey[100] : grey[900]  : "inherit"}>
              {children}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
