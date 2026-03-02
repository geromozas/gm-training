// import { Button, useMediaQuery, useTheme } from "@mui/material";
// import "./ProductCardDetail.css";

// const ProductCardDetail = ({
//   title,
//   description,
//   unit_price,
//   image,
//   addToCart,
//   buyCourse,
// }) => {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

//   return (
//     <div>
//       <h1 className="titleCardDetail">{title}</h1>

//       <div className="boxCardDetail">
//         {/* Imagen */}
//         <img className="imgCardDetail" src={image} alt={title} />

//         {/* Información derecha */}
//         <div className="boxDetailInfo">
//           <h2 style={{ color: "#ffffff" }}>Descripción</h2>

//           {/* IMPORTANTE: cambiamos <p> por <div> */}
//           <div className="textDetailDescription">
//             {description
//               .split("\n")
//               .map((linea, index) =>
//                 linea.trim() ? <p key={index}>{linea}</p> : null,
//               )}
//           </div>

//           {/* Precio */}
//           <h3 className="cardDetailPrice">
//             {Number(unit_price).toLocaleString("es-AR", {
//               style: "currency",
//               currency: "ARS",
//             })}
//           </h3>

//           {/* Botones */}
//           <div className="boxButtonsDetail">
//             <Button
//               size={isLargeScreen ? "large" : "medium"}
//               variant="contained"
//               onClick={buyCourse}
//             >
//               Comprar
//             </Button>

//             <Button variant="outlined" onClick={addToCart}>
//               Añadir al carrito
//             </Button>
//           </div>

//           {/* WhatsApp */}
//           <p style={{ marginTop: 20 }}>
//             ¿Tenés dudas?{" "}
//             <a
//               className="contactLink"
//               href={`https://wa.me/5493416041873?text=Hola%2C%20estoy%20interesado/a%20en%20este%20producto%20${title}`}
//             >
//               Contactame
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCardDetail;
import { Button, useMediaQuery, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./ProductCardDetail.css";

const ProductCardDetail = ({
  title,
  description,
  unit_price,
  image,
  addToCart,
  buyCourse,
}) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const beneficios = [
    "Plan estructurado paso a paso",
    "Progresión inteligente",
    "Adaptado a tu nivel",
    "Resultados medibles",
  ];

  const incluye = [
    "Rutina completa en PDF",
    "Guía de alimentación flexible",
    "Soporte por WhatsApp",
    "Actualizaciones incluidas",
  ];

  return (
    <div className="fadeInPage">
      <h1 className="titleCardDetail">{title}</h1>

      <div className="boxCardDetail">
        <img className="imgCardDetail" src={image} alt={title} />

        <div className="boxDetailInfo">
          <h2 className="sectionTitle">Descripción</h2>

          <div className="textDetailDescription">
            {description
              .split("\n")
              .map((linea, index) =>
                linea.trim() ? <p key={index}>{linea}</p> : null,
              )}
          </div>

          {/* BENEFICIOS */}
          <h2 className="sectionTitle">Beneficios</h2>
          <ul className="benefitsList">
            {beneficios.map((item, index) => (
              <li key={index}>
                <CheckCircleIcon className="checkIcon" />
                {item}
              </li>
            ))}
          </ul>

          {/* QUE INCLUYE */}
          <div className="includesBox">
            <h3>¿Qué incluye?</h3>
            <ul>
              {incluye.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <h3 className="cardDetailPrice">
            {Number(unit_price).toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </h3>

          <div className="boxButtonsDetail">
            <Button
              size={isLargeScreen ? "large" : "medium"}
              variant="contained"
              onClick={buyCourse}
            >
              Comprar
            </Button>

            <Button variant="outlined" onClick={addToCart}>
              Añadir al carrito
            </Button>
          </div>

          <p style={{ marginTop: 20 }}>
            ¿Tenés dudas?{" "}
            <a
              className="contactLink"
              href={`https://wa.me/5493416041873?text=Hola%2C%20estoy%20interesado/a%20en%20este%20producto%20${title}`}
            >
              Contactame
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetail;
