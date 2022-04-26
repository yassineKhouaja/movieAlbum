import AppBar from "@mui/material/AppBar";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
type LayoutProps = {
  children?: JSX.Element | JSX.Element[];
};
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      <Link color="inherit" href="https://www.linkedin.com/in/yassinekhouaja/">
        Linkedin
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LocalMoviesIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Movie Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
      <Box sx={{ bgcolor: "background.paper", p: 4 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Movie Album
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Gerer vos movies préférés
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
