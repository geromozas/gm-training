import HomeIcon from "@mui/icons-material/Home";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

export const menuItems = [
  {
    id: "home",
    path: "/",
    title: "Inicio",
    Icon: HomeIcon,
  },
  {
    id: "aboutMe",
    path: "/about-me",
    title: "Sobre Mí",
    Icon: EmojiPeopleIcon,
  },
  {
    id: "products",
    path: "/shop",
    title: "Tienda",
    Icon: FitnessCenterIcon,
  },
  {
    id: "cart",
    path: "/cart",
    title: "Carrito",
    Icon: ShoppingCartCheckoutIcon,
  },
];
