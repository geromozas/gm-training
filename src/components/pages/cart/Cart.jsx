// import { useContext } from "react";
// import { CartContext } from "../../../context/CartContext.jsx";
// import ProductCardCart from "../../productCard/ProductCardCart.jsx";
// import { Button } from "@mui/material";
// import "./Cart.css";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { cart, clearCart, getTotalPrice } = useContext(CartContext);
//   let total = getTotalPrice();
//   return (
//     <div>
//       <div className="boxTitleCart">
//         <h1 className="titleCart">Tu Carrito</h1>
//         <p className="textTitleCart">
//           Revisa tus productos seleccionados y procede al pago
//         </p>
//       </div>
//       <div>
//         <div>
//           {cart.length === 0 ? (
//             <div className="emptyCart">
//               <h1 className="textEmptyCart">
//                 Upss... Parece que tu carrito esta vacío...
//               </h1>
//               <Link to="/shop">
//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "#9BE564",
//                     color: "#0F1115",
//                     fontWeight: 600,
//                     borderRadius: "10px",
//                     textTransform: "none",
//                     "&:hover": { backgroundColor: "#7ED957" },
//                   }}
//                 >
//                   Ir a la tienda
//                 </Button>{" "}
//               </Link>
//             </div>
//           ) : (
//             <div className="boxCartFull">
//               <div>
//                 <h2>Productos en tu carrito</h2>
//                 {cart.map((product) => {
//                   return (
//                     <ProductCardCart
//                       key={product.id}
//                       image={product.image}
//                       title={product.title}
//                       unit_price={product.unit_price}
//                       id={product.id}
//                     />
//                   );
//                 })}
//                 <div className="boxButtonsCart">
//                   <div>
//                     <Link to="/shop">
//                       <Button
//                         variant="outlined"
//                         sx={{
//                           borderColor: "#9BE564",
//                           color: "#9BE564",
//                           borderRadius: "10px",
//                           textTransform: "none",
//                           "&:hover": {
//                             borderColor: "#7ED957",
//                             backgroundColor: "rgba(155,229,100,0.08)",
//                           },
//                         }}
//                       >
//                         ⬅ Continuar comprando
//                       </Button>{" "}
//                     </Link>
//                   </div>
//                   <div className="buttonEmptyCart">
//                     <Button
//                       variant="contained"
//                       onClick={clearCart}
//                       sx={{
//                         backgroundColor: "#ff4d4d",
//                         borderRadius: "10px",
//                         textTransform: "none",
//                         "&:hover": { backgroundColor: "#e63939" },
//                       }}
//                     >
//                       Vaciar Carrito
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//               <div className="boxTotalOrder">
//                 <h2>Resumen del pedido</h2>
//                 <h3>
//                   Total:
//                   {Number(total).toLocaleString("es-AR", {
//                     style: "currency",
//                     currency: "ARS",
//                   })}
//                 </h3>
//                 <div className="boxPay">
//                   <Link to="/checkout">
//                     <Button
//                       variant="contained"
//                       sx={{
//                         width: "100%",
//                         backgroundColor: "#9BE564",
//                         color: "#0F1115",
//                         fontWeight: 700,
//                         borderRadius: "12px",
//                         textTransform: "none",
//                         padding: "10px 0",
//                         "&:hover": { backgroundColor: "#7ED957" },
//                       }}
//                     >
//                       Proceder al pago
//                     </Button>{" "}
//                   </Link>
//                   <p>Pago 100% seguro</p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext.jsx";
import ProductCardCart from "../../productCard/ProductCardCart.jsx";
import { Button } from "@mui/material";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);
  let total = getTotalPrice();

  return (
    <div className="cartPage">
      <div className="boxTitleCart">
        <h1 className="titleCart">Tu Carrito</h1>
        <p className="textTitleCart">
          Revisa tus productos seleccionados y procede al pago
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="emptyCart">
          <h1 className="textEmptyCart">
            Upss... Parece que tu carrito está vacío...
          </h1>

          <Link to="/shop">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#9BE564",
                color: "#0F1115",
                fontWeight: 600,
                borderRadius: "10px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#7ED957" },
              }}
            >
              Ir a la tienda
            </Button>
          </Link>
        </div>
      ) : (
        <div className="boxCartFull">
          {/* IZQUIERDA */}
          <div className="boxProductsCart">
            <h2 className="cartSectionTitle">Productos en tu carrito</h2>

            {cart.map((product) => (
              <ProductCardCart
                key={product.id}
                image={product.image}
                title={product.title}
                unit_price={product.unit_price}
                id={product.id}
              />
            ))}

            <div className="boxButtonsCart">
              <Link to="/shop">
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#9BE564",
                    color: "#9BE564",
                    borderRadius: "10px",
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#7ED957",
                      backgroundColor: "rgba(155,229,100,0.08)",
                    },
                  }}
                >
                  ← Continuar comprando
                </Button>
              </Link>

              <Button
                variant="contained"
                onClick={clearCart}
                sx={{
                  backgroundColor: "#c62828",
                  borderRadius: "10px",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#b71c1c" },
                }}
              >
                Vaciar Carrito
              </Button>
            </div>
          </div>

          {/* DERECHA - RESUMEN */}
          <div className="boxTotalOrder">
            <h2>Resumen del pedido</h2>

            <h3>Total</h3>

            <h2 className="totalPrice">
              {Number(total).toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}
            </h2>

            <div className="boxPay">
              <Link to="/checkout" style={{ width: "100%" }}>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    backgroundColor: "#9BE564",
                    color: "#0F1115",
                    fontWeight: 700,
                    borderRadius: "12px",
                    textTransform: "none",
                    padding: "10px 0",
                    "&:hover": { backgroundColor: "#7ED957" },
                  }}
                >
                  Proceder al pago
                </Button>
              </Link>

              <p>Pago 100% seguro</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
