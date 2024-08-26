import React, { useEffect, useMemo, useState } from "react";
import { Banner, Categories, Delivery, Products } from "./components";
import { Element } from "react-scroll";
import { ProductModal, IngredientModal } from "../../components";
import { createPortal } from "react-dom";
import { consructor, fifty } from "../../constants/data";

function HomePage() {
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  function handleClose() {
    setProductModalOpen(false);
    setSelectedProduct(null);
  }

  function handleOpen(product) {
    setSelectedProduct(product);
    setProductModalOpen(true);
  }

  function getCategories() {
    fetch("https://fa59f0418889930f.mokky.dev/categories")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setCategoriesList(json);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getProducts() {
    fetch("https://fa59f0418889930f.mokky.dev/products?_relations=categorys")
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        setProducts(json);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  let newCategories = useMemo(() => {
    return categoriesList.map((item) => ({
      ...item,
      products:
        item.value === "pitsa"
          ? [
              ...products.filter((el) => el.category?.id === item.id),
              fifty,
              consructor,
            ]
          : products.filter((el) => el.category?.id === item.id),
    }));
  }, [categoriesList, products]);

  return (
    <div className="home-page">
      <Banner />
      <Delivery />
      <Categories categories={categoriesList} />
      {newCategories.map(({ id, value, label, products }) => (
        <Element key={id} name={value}>
          <Products
            id={id}
            title={label}
            list={products}
            handleOpen={handleOpen}
          />
        </Element>
      ))}

      {productModalOpen &&
        selectedProduct !== null &&
        createPortal(
          selectedProduct.isPizza ? (
            <ProductModal
              open={productModalOpen}
              onClose={handleClose}
              product={selectedProduct}
            />
          ) : (
            <IngredientModal
              open={productModalOpen}
              onClose={handleClose}
              product={selectedProduct}
            />
          ),
          document.querySelector(".wrapper")
        )}
    </div>
  );
}

export default HomePage;
