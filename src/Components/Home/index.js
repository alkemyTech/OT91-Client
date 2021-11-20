import React from "react";
import Carousel from "../Carousel/Carousel";
import LoadingSpinner from "../../Utils/loadingSpinner";

const Home = ({listNews}) => {

  return (
    <div>
     {listNews ? <div>
          <h2>Titulo de bienvenida</h2>
          <section>
              <Carousel />
              <div>.map() del listado general de noticias</div>
          </section>
       </div> :<LoadingSpinner
          type="ThreeDots"
          color="#000000"
          height={50}
          width={100}
        />
      }
    </div>
  );
};

export default Home;
