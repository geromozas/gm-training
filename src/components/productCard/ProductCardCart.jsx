import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import "./ProductCardCart.css";

const ProductCardCart = ({ title, unit_price, image, id }) => {
  const { deleteById } = useContext(CartContext);
  return (
    <div className="boxProductCard">
      <div className="subBoxProductCard">
        <img className="imgCart" src={image} alt="" />
        <div className="boxImgTitlePrice">
          <h4 className="titleProductCart">{title}</h4>
          <p>
            {Number(unit_price).toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </p>
        </div>
        <div>
          {/* <Button
            size="small"
            variant="contained"
            style={{ height: 30 }}
            onClick={() => deleteById(id)}
          >
            Eliminar
          </Button> */}
          <Button
            size="small"
            variant="contained"
            onClick={() => deleteById(id)}
            sx={{
              height: 35,
              backgroundColor: "#9BE564",
              color: "#0F1115",
              fontWeight: 600,
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#7ED957",
              },
            }}
          >
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCart;
