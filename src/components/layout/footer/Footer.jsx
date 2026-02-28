import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import "./Footer.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Footer = () => {
  const { isLogged } = useContext(AuthContext);

  return (
    <footer className="footer">
      <div className="footerContainer">
        {/* logo + frase */}
        <div className="footerCol brand">
          <img
            className="footerLogo"
            src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1747777894/gm-training/logo-gm-fenrir_nlaa8d.png"
            alt="logo"
          />
          <p>
            Transformando vidas a través del entrenamiento y hábitos
            sostenibles.
          </p>
        </div>

        {/* links */}
        <div className="footerCol">
          <h4>Navegación</h4>
          <a href="/">Inicio</a>
          <a href="/about-me">Sobre mí</a>
          <a href="/shop">Planes</a>

          {isLogged && (
            <>
              <a href="/cart">Carrito</a>
              <a href="/user-orders">Mis compras</a>
            </>
          )}
        </div>

        {/* contacto */}
        <div className="footerCol">
          <h4>Contacto</h4>

          <a href="mailto:gero.m.coach@gmail.com">
            <EmailIcon /> gero.m.coach@gmail.com
          </a>

          <a href="https://wa.me/5493416041873">
            <WhatsAppIcon /> +54 9 341 604-1873
          </a>

          <a href="https://www.instagram.com/gero_training/">
            <InstagramIcon /> @gero_training
          </a>
        </div>
      </div>

      {/* linea */}
      <div className="footerDivider" />

      {/* copyright */}
      <p className="copyright">
        © 2025 Geronimo Mozas — Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
