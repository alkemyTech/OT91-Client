import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import LoadingSpinner from "../../Utils/loadingSpinner";
import { getOrganizationInformation } from "../../Services/OrganizationInformation";
import Footer from "../Footer/Footer";
import Header from '../Layout/Header/Header'
import CardsSection from './CardsSection';
import * as newsService from '../../Services/newsServices';
import * as testimonialService from '../../Services/testimonialService'
import LoadingSpinner from "../../Utils/loadingSpinner";

const Home = () => {
const [welcomeText, setWelcomeText] = useState("");
  useEffect(() => {
    getOrganizationInformation().then(res => setWelcomeText(res.data.welcome_text));
  }, []);
  
  return (
    <div>
     {listNews ? <div>
         <Header/>
            <h2 style={{textAlign:"center"}}>{welcomeText}</h2>
           <section>
              <Carousel />
              <CardsSection title="Últimas novedades" getInformation={newsService.getAll} button={{text:'Ver todas', to:'/novedades'}}/>
              <CardsSection title="Testimonios" getInformation={testimonialService.getAllTestimonial}/>
          </section>
          <Footer />
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
