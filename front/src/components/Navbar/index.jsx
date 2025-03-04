import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  InputBase,
  Drawer,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import { Cart } from "../../Pages/Cart";
import { FormLogin } from "../../Pages/FormLogin"; 
import { Link } from "react-router-dom";

// Función Buscador
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const Navbar = () => {
  // Estado de los Drawers
  const [cartOpen, setCartOpen] = React.useState(false);
  const [sessionOpen, setSessionOpen] = React.useState(false);
  const [user, setUser] = React.useState(null); // Estado para manejar el usuario logueado

  // Funciones para manejar los Drawers
  const toggleDrawerCart = React.useCallback((open) => () => {
    setCartOpen(open);
  }, []);

  const toggleDrawerSession = React.useCallback((open) => () => {
    setSessionOpen(open);
  }, []);

  const cartDrawerContent = (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      role="presentation"
    >
      <Cart />
    </Box>
  );

  const sessionDrawerContent = (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      role="presentation"
    >
      <FormLogin setUser={setUser} onClose={toggleDrawerSession(false)} />
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img
                src="logoSinFondo.png"
                alt="Logo"
                style={{
                  width: "120px",
                  backgroundColor: "transparent",
                  display: "block",
                }}
              />
            </Link>
          </Typography>
          <Button variant="text" color="inherit">
            <Link to="/tienda" style={{ color: "white", textDecoration: "none" }}>
              Tienda
            </Link>
          </Button>
          <Button variant="text" color="inherit">
            <Link to="/contacto" style={{ color: "white", textDecoration: "none" }}>
              Contacto
            </Link>
          </Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Buscar..." inputProps={{ "aria-label": "search" }} />
          </Search>
          {/* Drawer del carrito */}
          <Button onClick={toggleDrawerCart(true)} sx={{ color: "white" }}>
            <ShoppingCartSharpIcon />
          </Button>
          <Drawer open={cartOpen} onClose={toggleDrawerCart(false)} anchor="right">
            {cartDrawerContent}
          </Drawer>
          {/* Drawer de sesión */}
          <Button onClick={toggleDrawerSession(true)} sx={{ color: "white" }}>
            <PersonSharpIcon />
          </Button>
          <Drawer open={sessionOpen} onClose={toggleDrawerSession(false)} anchor="right">
            {sessionDrawerContent}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
