import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig.js";
import { getDocs, collection, limit, query } from "firebase/firestore";
import ProductCard from "../../productCard/ProductCard.jsx";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let refCollection = collection(db, "products");

    let productQuery = query(refCollection, limit(3));

    getDocs(productQuery)
      .then((res) => {
        let newArray = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });
        setProducts(newArray);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    // <div id="boxHome">
    //   <div className="homeStart">
    //     <img
    //       src="https://firebasestorage.googleapis.com/v0/b/gm-training-96e51.firebasestorage.app/o/placeholder.jpg?alt=media&token=524ebb7b-4c9b-4ae3-b50f-da1ebda2693f"
    //       alt="imagen presentación"
    //       className="imgHome"
    //     />
    //     <div className="boxTextHome">
    //       <h1 className="titleHome">TRANSFORMA TU CUERPO</h1>
    //       <h1 className="titleHome">CAMBIA TU VIDA</h1>
    //       <p className="textInitialHome">
    //         Soy Geronimo Mozas, entrenador personal. Ayudo a hombres y mujeres a
    //         ganar masa muscular o perder grasa con planes de entrenamiento
    //         prácticos, sostenibles y 100% enfocados en resultados visibles. Ya
    //         sea que entrenes en casa o en gimnasio, tengo un plan para vos.
    //       </p>
    //       <div className="buttonsHome">
    //         <Link to={"/shop"}>
    //           <Button
    //             size="small"
    //             variant="contained"
    //             style={{ marginRight: 20 }}
    //           >
    //             Ver planes
    //           </Button>
    //         </Link>
    //         <Link to={"/about-me"}>
    //           <Button size="small" variant="contained">
    //             Conoce más
    //           </Button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="hero">
      <div className="heroContent">
        <div className="heroText">
          <h1>Transformá tu cuerpo</h1>
          <h2>Lográ resultados reales</h2>

          <p>
            Soy Gerónimo Mozas, entrenador personal. Te ayudo a ganar músculo o
            perder grasa con planes simples, sostenibles y enfocados en
            resultados.
          </p>

          <div className="heroButtons">
            <Link to="/shop">
              <Button variant="contained" size="large">
                Ver planes
              </Button>
            </Link>

            <Link to="/about-me">
              <Button variant="outlined" size="large">
                Sobre mí
              </Button>
            </Link>
          </div>
        </div>

        <img
          src="https://firebasestorage.googleapis.com/v0/b/gm-training-96e51.firebasestorage.app/o/placeholder.jpg?alt=media&token=524ebb7b-4c9b-4ae3-b50f-da1ebda2693f"
          alt="entrenamiento"
          className="heroImg"
        />
      </div>
    </div>
  );
};

export default Home;
