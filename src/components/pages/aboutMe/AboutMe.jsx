import { Button } from "@mui/material";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <div className="boxTitleAboutMe">
        <h1 className="titleAboutMe">Sobre Mí</h1>
        <p className="subtitleAbout">Entrenador Personal • Coach Online</p>
      </div>
      <div className="boxAboutMe">
        <div className="boxTextAboutMe">
          <h2 className="titleMyPath">¿Quién soy?</h2>
          <p className="textAboutMe">
            Soy Geronimo Mozas, entrenador personal y desarrollador web.
          </p>
          <p className="textAboutMe">
            Empecé a entrenar calistenia y pesas a los 16 años, sin saber mucho,
            solo con ganas de cambiar mi físico. Pasé por errores, frustraciones
            y muchas pruebas hasta entender cómo entrenar de verdad, cómo
            alimentarme sin obsesiones y cómo hacer de esto un estilo de vida.
          </p>
          <p className="textAboutMe">
            Hoy, con años de experiencia entrenando, formándome y ayudando a
            otros, ofrezco planes diseñados para que veas resultados reales sin
            perder tiempo. Mi enfoque combina lo mejor de la ciencia del
            entrenamiento con la experiencia práctica: entrenamientos claros,
            progresivos y realistas, acompañados de buenos hábitos y una
            alimentación flexible.
          </p>
          <p className="textAboutMe">
            Creo que cada persona tiene el potencial de superar sus límites y
            alcanzar sus objetivos.
          </p>
          <p className="textAboutMe">
            Ya sea que quieras ganar músculo, definir, mejorar tu rendimiento en
            tu deporte o simplemente sentirte mejor, estoy acá para ayudarte.
          </p>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/gm-training-96e51.firebasestorage.app/o/quien-soy.jpeg?alt=media&token=2d88a2c3-ceca-4f47-b78e-e0d01fd89c48"
          alt=""
          className="imgAboutMe"
        />
      </div>
      <div className="boxAboutMeLower">
        <h2 className="questionTransf">
          ¿Listo para comenzar tu Transformación física y mental?
        </h2>
        <p className="textQuestion">
          Explora mis planes y asesorias disponibles.
        </p>
        <div
          style={{
            display: "flex",
            marginTop: 15,
            gap: 10,
          }}
        >
          <a href="https://wa.me/5493413485580?text=Hola%2C%20te%20contacto%20desde%20tu%20web...">
            <Button color="secondary" variant="contained" size="small">
              Contactar
            </Button>
          </a>
          <a href="/shop">
            <Button color="secondary" variant="contained" size="small">
              Ver planes
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
