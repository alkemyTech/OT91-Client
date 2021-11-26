import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import { getOrganizationInformation } from "../../Services/OrganizationInformation";
import Header from '../Layout/Header/Header'
import CardsSection from './CardsSection';
import * as newsService from '../../Services/newsServices'
import * as testimonialService from '../../Services/testimonialService'
const Home = () => {
  const [welcomeText, setWelcomeText] = useState("");
  useEffect(() => {
    getOrganizationInformation().then(res => setWelcomeText(res.data.welcome_text))
  }, [])
  return (
    <div>
      <h2 style={{textAlign:"center"}}>{welcomeText}</h2>
      <section>
        <Carousel />
        <CardsSection title="Últimas novedades" getInformation={newsService.getAll} button={{text:'Ver todas', to:'/novedades'}}/>
        <CardsSection title="Testimonios" getInformation={testimonialService.getAllTestimonial}/>
      </section>
    </div>
  );
};

export default Home;
