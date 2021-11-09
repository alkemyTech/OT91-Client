import React from "react";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <h2>Titulo de bienvenida</h2>
      <section>
        <Carousel />
        <div>.map() del listado general de noticias</div>
      </section>
    </div>
  );
};

export default Home;
