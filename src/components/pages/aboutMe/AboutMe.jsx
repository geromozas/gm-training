import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="imgAboutMeSwiper"
        >
          <SwiperSlide>
            <img
              className="imgAboutMe"
              src="https://firebasestorage.googleapis.com/v0/b/gm-training-96e51.firebasestorage.app/o/Remo-acostado.PNG?alt=media&token=a831f1a6-4965-4149-91ad-4865dc00806f"
              alt="Geronimo 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="imgAboutMe"
              src="https://firebasestorage.googleapis.com/v0/b/gm-training-96e51.firebasestorage.app/o/back-squat.jpg?alt=media&token=c3ba9e2f-fb87-4c89-82f2-e65ea02a771d"
              alt="Geronimo 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="imgAboutMe"
              src="https://firebasestorage.googleapis.com/v0/b/gm-training-96e51.firebasestorage.app/o/push-up.jpg?alt=media&token=3a17f768-0076-40ec-bc6f-95c41ca41cc8"
              alt="Geronimo 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="imgAboutMe"
              src="https://firebasestorage.googleapis.com/v0/b/gm-training-96e51.firebasestorage.app/o/press-pecho.jpg?alt=media&token=754c8c3b-4440-43e7-ac06-771514db8eb4"
              alt="Geronimo 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="imgAboutMe"
              src="https://firebasestorage.googleapis.com/v0/b/gm-training-96e51.firebasestorage.app/o/ext.caudriceps.jpg?alt=media&token=947e7969-4444-469a-a49c-6a1a1daa4a28"
              alt="Geronimo 5"
            />
          </SwiperSlide>
        </Swiper>

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
