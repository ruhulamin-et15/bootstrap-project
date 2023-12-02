import React from "react";
import Header from "../../components/Header/Header";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import Category from "../../components/Category/Category";
import ShoesCard from "../../components/ShoesCard/ShoesCard";
import BackpackCard from "../../components/BackpackCard/BackpackCard";
import Contact from "../../components/Contact/Contact";

const Layout = () => {
  return (
    <>
      <Header />
      <MyCarousel />
      <Category />
      <ShoesCard />
      <BackpackCard />
      <Contact />
    </>
  );
};

export default Layout;
