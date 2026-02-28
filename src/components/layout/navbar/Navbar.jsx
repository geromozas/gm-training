// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonIcon from "@mui/icons-material/Person";
// import ShopIcon from "@mui/icons-material/Shop";

// import { Link, Outlet, useNavigate } from "react-router-dom";
// import "./Navbar.css";
// import { useContext, useState } from "react";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { menuItems } from "../../../router/navigation";
// import { Button } from "@mui/material";
// import { AuthContext } from "../../../context/AuthContext";
// import { logOut } from "../../../firebaseConfig";
// const drawerWidth = 200;

// function Navbar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const { logoutContext, user, isLogged } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const rolAdmin = import.meta.env.VITE_ROL_ADMIM;

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleLogOut = () => {
//     logOut();
//     logoutContext();
//     navigate("/login");
//   };

//   const drawer = (
//     <Box>
//       <List>
//         {menuItems.map(({ id, path, title, Icon }) => {
//           return (
//             <Link key={id} to={path}>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <Icon sx={{ color: "whitesmoke" }} />
//                   </ListItemIcon>
//                   <ListItemText primary={title} sx={{ color: "whitesmoke" }} />
//                 </ListItemButton>
//               </ListItem>
//             </Link>
//           );
//         })}

//         {user.rol === rolAdmin && (
//           <Link to={"/all-users-orders"}>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   <ShoppingBagIcon sx={{ color: "whitesmoke" }} />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={"Compras clientes"}
//                   sx={{ color: "whitesmoke" }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           </Link>
//         )}

//         {user.rol === rolAdmin && (
//           <Link to={"/dashboard"}>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   <DashboardIcon sx={{ color: "whitesmoke" }} />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={"Dashboard"}
//                   sx={{ color: "whitesmoke" }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           </Link>
//         )}
//         {isLogged ? (
//           <div>
//             <Link to={"/user-orders"}>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <ShopIcon sx={{ color: "whitesmoke" }} />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={"Mis compras"}
//                     sx={{ color: "whitesmoke" }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             </Link>
//             <ListItem disablePadding>
//               <ListItemButton onClick={handleLogOut}>
//                 <ListItemIcon>
//                   <LogoutIcon sx={{ color: "black" }} />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={"Cerrar sesion"}
//                   sx={{ color: "black" }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           </div>
//         ) : (
//           <Link to={"/login"}>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   <PersonIcon sx={{ color: "black" }} />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={"Iniciar sesión"}
//                   sx={{ color: "black" }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           </Link>
//         )}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       {/* <AppBar
//         position="fixed"
//         sx={{
//           width: "100%",
//         }}
//       > */}
//       <AppBar
//         position="fixed"
//         elevation={0}
//         sx={{
//           width: "100%",
//           background: "rgba(11,11,11,0.7)",
//           backdropFilter: "blur(12px)",
//           borderBottom: "1px solid rgba(255,255,255,0.05)",
//         }}
//       >
//         <Toolbar
//           sx={{
//             gap: "20px",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           <Link
//             to="/"
//             style={{
//               color: "whitesmoke",
//             }}
//           >
//             <img
//               src="https://firebasestorage.googleapis.com/v0/b/gm-training-96e51.firebasestorage.app/o/logo-gm-fenrir.png?alt=media&token=46de1bed-6e01-42be-a1a2-b06ebe940dba"
//               alt=""
//               // style={{ width: 100, padding: "5px", borderRadius: "10px" }}
//               style={{
//                 width: 100,
//                 padding: "5px",
//                 borderRadius: "10px",
//                 filter: "drop-shadow(0 0 10px rgba(155,229,100,.25))",
//               }}
//             />
//           </Link>

//           <Box
//             sx={{
//               display: { xs: "block", md: "none" },
//             }}
//           >
//             <IconButton onClick={handleDrawerToggle}>
//               <MenuIcon sx={{ color: "#9BE564" }} />
//             </IconButton>
//           </Box>

//           <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               alignItems: "center",
//               gap: { md: 2, lg: 5 },
//             }}
//           >
//             <Link to="/">
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 size="small"
//                 className="buttonMenu"
//               >
//                 Inicio
//               </Button>
//             </Link>

//             <Link to="/about-me">
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 size="small"
//                 className="buttonMenu"
//               >
//                 Sobre mí
//               </Button>
//             </Link>

//             <Link to="/shop">
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 size="small"
//                 className="buttonMenu"
//               >
//                 Tienda
//               </Button>
//             </Link>

//             {user.rol === rolAdmin && (
//               <Link to="/dashboard">
//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   size="small"
//                   className="buttonMenu"
//                 >
//                   Dashboard
//                 </Button>
//               </Link>
//             )}

//             {isLogged ? (
//               <Box sx={{ display: "flex", gap: { md: 2, lg: 5 } }}>
//                 <Link to="/cart">
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     size="small"
//                     className="buttonMenu"
//                   >
//                     Carrito
//                   </Button>
//                 </Link>
//                 <Link to="/user-orders">
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     size="small"
//                     className="buttonMenu"
//                   >
//                     Mis compras
//                   </Button>
//                 </Link>
//                 <Link>
//                   <Button
//                     variant="outlined"
//                     color="secondary"
//                     size="small"
//                     className="buttonMenu"
//                     onClick={handleLogOut}
//                   >
//                     Cerrar sesion
//                   </Button>
//                 </Link>
//               </Box>
//             ) : (
//               <Link to="/login">
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   size="small"
//                   className="buttonMenu"
//                 >
//                   Iniciar sesión
//                 </Button>
//               </Link>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       <Box component="nav" aria-label="mailbox folders">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           anchor={"right"}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: "block", md: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//               backgroundColor: "#393E46",
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>

//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           py: 4,
//           width: "100%",
//           minHeight: "100vh",
//           px: 2,
//         }}
//       >
//         <Toolbar />

//         <Outlet />
//       </Box>
//     </Box>
//   );
// }

// export default Navbar;
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
import LogoutIcon from "@mui/icons-material/Logout";

import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useContext, useState } from "react";
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
  const location = useLocation();

  const rolAdmin = import.meta.env.VITE_ROL_ADMIM;

  const isActive = (path) => location.pathname === path;

  const activeStyle = {
    background: "#9BE564",
    color: "#000",
    boxShadow: "0 0 15px rgba(155,229,100,.4)",
  };

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
        {menuItems.map(({ id, path, title, Icon }) => (
          <Link key={id} to={path}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={title} sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}

        {user.rol === rolAdmin && (
          <Link to={"/all-users-orders"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingBagIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Compras clientes"
                  sx={{ color: "white" }}
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
                  <DashboardIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          </Link>
        )}

        {isLogged ? (
          <>
            <Link to={"/user-orders"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ShopIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Mis compras" sx={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            </Link>

            <ListItem disablePadding>
              <ListItemButton onClick={handleLogOut}>
                <ListItemIcon>
                  <LogoutIcon sx={{ color: "#9BE564" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Cerrar sesión"
                  sx={{ color: "#9BE564" }}
                />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <Link to={"/login"}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon sx={{ color: "#9BE564" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Iniciar sesión"
                  sx={{ color: "#9BE564" }}
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
        elevation={0}
        sx={{
          width: "100%",
          background: "rgba(11,11,11,0.7)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LOGO */}
          <Link to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gm-training-96e51.firebasestorage.app/o/logo-gm-fenrir.png?alt=media&token=46de1bed-6e01-42be-a1a2-b06ebe940dba"
              alt="logo"
              style={{
                width: 100,
                padding: 5,
                borderRadius: 10,
                filter: "drop-shadow(0 0 10px rgba(155,229,100,.25))",
              }}
            />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon sx={{ color: "#9BE564" }} />
            </IconButton>
          </Box>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Link to="/">
              <Button
                className="buttonMenu"
                sx={isActive("/") ? activeStyle : {}}
              >
                Inicio
              </Button>
            </Link>

            <Link to="/about-me">
              <Button
                className="buttonMenu"
                sx={isActive("/about-me") ? activeStyle : {}}
              >
                Sobre mí
              </Button>
            </Link>

            <Link to="/shop">
              <Button
                className="buttonMenu"
                sx={isActive("/shop") ? activeStyle : {}}
              >
                Tienda
              </Button>
            </Link>

            {user.rol === rolAdmin && (
              <Link to="/dashboard">
                <Button
                  className="buttonMenu"
                  sx={isActive("/dashboard") ? activeStyle : {}}
                >
                  Dashboard
                </Button>
              </Link>
            )}

            {isLogged ? (
              <>
                <Link to="/cart">
                  <Button
                    className="buttonMenu"
                    sx={isActive("/cart") ? activeStyle : {}}
                  >
                    Carrito
                  </Button>
                </Link>

                <Link to="/user-orders">
                  <Button
                    className="buttonMenu"
                    sx={isActive("/user-orders") ? activeStyle : {}}
                  >
                    Mis compras
                  </Button>
                </Link>

                <Button
                  variant="outlined"
                  className="buttonMenu"
                  onClick={handleLogOut}
                >
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button
                  variant="outlined"
                  className="buttonMenu"
                  sx={isActive("/login") ? activeStyle : {}}
                >
                  Iniciar sesión
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* DRAWER MOBILE */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        anchor="right"
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#111111",
            borderLeft: "1px solid rgba(255,255,255,.05)",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* MAIN */}
      <Box component="main" sx={{ flexGrow: 1, py: 4, width: "100%", px: 2 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Navbar;
