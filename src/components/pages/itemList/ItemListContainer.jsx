import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig.js";
import { getDocs, collection } from "firebase/firestore";
import ProductCard from "../../productCard/ProductCard.jsx";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let refCollection = collection(db, "products");
    getDocs(refCollection)
      .then((res) => {
        let newArray = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });
        setProducts(newArray);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="boxTitleShop">
        <h1 className="titleShop" style={{ marginBottom: 5 }}>
          Mis planes
        </h1>
        <p className="textInitialShop">
          Descubre mi amplia variedad de planes y asesorias diseñados para tu
          crecimiento fisico y mental.
        </p>
      </div>
      <div className="boxProducts">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              small_description={product.small_description}
              unit_price={product.unit_price}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
