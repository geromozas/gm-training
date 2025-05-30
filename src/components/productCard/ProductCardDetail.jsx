import { Button, useMediaQuery, useTheme } from "@mui/material";
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
  return (
    <div>
      <h1 className="titleCardDetail">{title}</h1>

      <div className="boxCardDetail">
        <img className="imgCardDetail" src={image} alt="" />
        <div style={{ color: "white" }}>
          <h2>Descripción</h2>
          <p className="textDetailDescription">
            {description.split("\n").map((linea, index) => (
              <span key={index}>
                {linea}
                <br />
              </span>
            ))}
          </p>
          <h3 className="cardDetailPrice">
            {" "}
            {Number(unit_price).toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </h3>
          <div className="boxButtonsDetail">
            <Button
              size={isLargeScreen ? "large" : "small"}
              style={{ marginRight: 20, marginBottom: 0 }}
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
            ¿Tenes dudas?{" "}
            <a
              href={`https://wa.me/5493416041873?text=Hola%2C%20estoy%20interesado/a%20en%20este%20producto, ${title}...`}
              style={{ color: "#DFD0B8", fontWeight: "bold" }}
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
