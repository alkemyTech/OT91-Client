import React from "react";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <h2>Titulo de bienvenida</h2>
      <section>
        <Carousel />
        <div>.map() del listado general de noticias</div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
