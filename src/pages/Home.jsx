import React from "react";
import Featured from "../components/Featured";
import Product from "../components/Product";
const Home = () => {
  return (
    <>
      <Featured
        product="Nancy Chair"
        url="https://helendo.jamstacktemplates.dev/images/featured-product/nancy-chair.png"
        price={90}
        order="order-none"
      />
      <Featured
        product="Table Wood Pine"
        url="https://helendo.jamstacktemplates.dev/images/featured-product/table-wood-pine.png"
        price={50}
        order="md:order-last order-none"
      />
      <Featured
        product="Art Deco Home"
        url="https://helendo.jamstacktemplates.dev/images/featured-product/art-deco-home.png"
        price={30}
        order="order-none"
      />
      <Product/>
    </>
  );
};

export default Home;
