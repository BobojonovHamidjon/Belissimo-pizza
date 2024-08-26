import React, { useEffect, useState } from "react";
import HalfProducts from "./components/HalfProducts";
import Selected from "./components/Selected";

function ConstructorHalf() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState({
    // left: {
    //   title: "Tovuqli donar",
    //   subtitle:
    //     "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
    //   price: 63000,
    //   discount: 0,
    //   old_price: 0,
    //   isPizza: true,
    //   isCombo: false,
    //   category_id: 2,
    //   image:
    //     "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F5fb58b09-5c77-44de-8de8-f1be55c2aef1.jpg&w=1920&q=100",
    //   id: 11,
    // },
    // right: {
    //   title: "Halapeno",
    //   subtitle:
    //     'Kurka filesi, yumshoq mol goʻshti, piyoz, pomidor, "Halapeno" achchiq qalampiri, motsarella pishlogʻi va barbekyu sous',
    //   price: 57000,
    //   discount: 0,
    //   old_price: 0,
    //   isPizza: true,
    //   isCombo: false,
    //   category_id: 2,
    //   image:
    //     "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F84e3a554-551a-45f6-9ac1-9c7870aa6f14.jpg&w=1920&q=100",
    //   id: 12,
    // },
  });

  function getProducts() {
    fetch("https://11fbde40b25cf07f.mokky.dev/products?isPizza=true")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }

  function selectProduct(type, product) {
    setSelected({ ...selected, [type]: product });
  }

  useEffect(() => getProducts(), []);

  return (
    <div className="cons-half">
      <div className="container">
        <div className="half-row">
          <HalfProducts
            selectProduct={selectProduct}
            type="left"
            selected={selected}
            products={products}
          />
          <Selected selected={selected} />
          <HalfProducts
            selectProduct={selectProduct}
            type="right"
            selected={selected}
            products={products}
          />
        </div>
      </div>
    </div>
  );
}

export default ConstructorHalf;
