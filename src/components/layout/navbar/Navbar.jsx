import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShopIcon from "@mui/icons-material/Shop";

import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { menuItems } from "../../../router/navigation";
import { Button } from "@mui/material";
import { AuthContext } from "../../../context/AuthContext";
import { logOut } from "../../../firebaseConfig";
const drawerWidth = 200;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { logoutContext, user, isLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  const rolAdmin = import.meta.env.VITE_ROL_ADMIM;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogOut = () => {
    logOut();
    logoutContext();
    navigate("/login");
  };

  const drawer = (
    <Box>
      <List>
        {menuItems.map(({ id, path, title, Icon }) => {
          return (
            <Link key={id} to={path}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Icon sx={{ color: "whitesmoke" }} />
                  </ListItemIcon>
                  <ListItemText primary={title} sx={{ color: "whitesmoke" }} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}

        {user.rol === rolAdmin && (
          <Link to={"/all-users-orders"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingBagIcon sx={{ color: "whitesmoke" }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Compras clientes"}
                  sx={{ color: "whitesmoke" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        )}

        {user.rol === rolAdmin && (
          <Link to={"/dashboard"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon sx={{ color: "whitesmoke" }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Dashboard"}
                  sx={{ color: "whitesmoke" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        )}
        {isLogged ? (
          <div>
            <Link to={"/user-orders"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ShopIcon sx={{ color: "whitesmoke" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Mis compras"}
                    sx={{ color: "whitesmoke" }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogOut}>
                <ListItemIcon>
                  <LogoutIcon sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Cerrar sesion"}
                  sx={{ color: "black" }}
                />
              </ListItemButton>
            </ListItem>
          </div>
        ) : (
          <Link to={"/login"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Iniciar sesión"}
                  sx={{ color: "black" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            gap: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/"
            style={{
              color: "whitesmoke",
            }}
          >
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1747777894/gm-training/logo-gm-fenrir_nlaa8d.png"
              alt=""
              style={{ width: 100, padding: "5px", borderRadius: "10px" }}
            />
          </Link>

          <Box
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <IconButton
              color="secondary.primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon color="secondary.primary" />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: { md: 2, lg: 5 },
            }}
          >
            <Link to="/">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className="buttonMenu"
              >
                Inicio
              </Button>
            </Link>

            <Link to="/about-me">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className="buttonMenu"
              >
                Sobre mí
              </Button>
            </Link>

            <Link to="/shop">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className="buttonMenu"
              >
                Tienda
              </Button>
            </Link>

            {user.rol === rolAdmin && (
              <Link to="/dashboard">
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  className="buttonMenu"
                >
                  Dashboard
                </Button>
              </Link>
            )}

            {isLogged ? (
              <Box sx={{ display: "flex", gap: { md: 2, lg: 5 } }}>
                <Link to="/cart">
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className="buttonMenu"
                  >
                    Carrito
                  </Button>
                </Link>
                <Link to="/user-orders">
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className="buttonMenu"
                  >
                    Mis compras
                  </Button>
                </Link>
                <Link>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    className="buttonMenu"
                    onClick={handleLogOut}
                  >
                    Cerrar sesion
                  </Button>
                </Link>
              </Box>
            ) : (
              <Link to="/login">
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  className="buttonMenu"
                >
                  Iniciar sesión
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav" aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor={"right"}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#393E46",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
          width: "100%",
          minHeight: "100vh",
          px: 2,
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}

export default Navbar;
