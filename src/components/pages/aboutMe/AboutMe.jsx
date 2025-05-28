import { Button } from "@mui/material";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <div className="boxTitleAboutMe">
        <h1 className="titleAboutMe">Sobre Mí</h1>
        <p className="textTitleAboutMe">
          Conoce mi historia, formación y filosofía de trabajo.
        </p>
      </div>
      <div className="boxAboutMe">
        <img
          className="imgAboutMe"
          src="https://firebasestorage.googleapis.com/v0/b/gm-training-96e51.firebasestorage.app/o/IMG_1097.PNG?alt=media&token=2a232d27-2a11-47af-83dc-3ece0bd96eae"
          alt=""
        />

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
            Ya sea que quieras ganar músculo, definir, mejorar tu rendimiento en
            tu deporte o simplemente sentirte mejor, estoy acá para ayudarte.
          </p>
        </div>
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
            <Button color="secondary" variant="contained">
              Contactar
            </Button>
          </a>
          <a href="/shop">
            <Button color="secondary" variant="contained">
              Ver planes
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
