import React from "react";
import "../../Styles/CardStyle.css";
import { listHasValues } from "../../Utils/validation";
import Title from "../Title/Title";
import CustomCard from "../Card/CustomCard";
import { Container } from "@mui/material";
import VideoCard from "../Card/VideoCard";
const lastNewsMock = [
  {
    id: 626,
    name: "VI Jornada recreativa",
    content:
      "Se realizó la VI jornada recreativa de invierno, jovenes de todas las edades participarion en juegos y los más chicos presentaron una coreografía espectacular!",
    image: "https://ukrainer.net/wp-content/uploads/2019/11/11-99.jpg",
  },
  {
    id: 629,
    name: "Jornada domigo juguetes 12",
    content:
      "VI jornada recreativa de invierno, jovenes de todas las edades participarion en juegos y los m&aacute;s chicos presentaron una core",
    image: "https://ukrainer.net/wp-content/uploads/2019/11/0-113.jpg",
    user_id: null,
  },
  {
    id: 637,
    name: "Actividades anuales",
    content:
      "Jornada recreativa de invierno, jovenes de todas las edades participarion en juegos y los m&aacute;s chicos presentaron una core",
    image:
      "https://www.kleineherzen.or.at/wp-content/uploads/Kids_Mutter_Kind_haus2019.png",
  },
];
const videoLastEvent={
  name: 'Asistencia a comedores comunitarios en Buenos Aires.',
  content:'Donación de 42 toneladas de alimentos para 5 comedores comunitarios en el partido de San Martín, Buenos Aires, que diariamente atienden a 1210 personas.',
  video:'https://youtu.be/4YnSk1gI_Oo'
};
const NewsList = ({ lastNews }) => {
  const newsListHasValues = listHasValues([...lastNewsMock,]);
  return (
    <Container className="ContainerList">
      <Title title="Novedades" />
      <ul className="list-container-novedades">
        {newsListHasValues ? (
          lastNewsMock.map((news) => {
            return (
              <CustomCard
                key={news.id}
                title={news.name}
                img={news.image}
                description={news.content}
              />
            );
          })
        ) : (
          <p>No hay novedades</p>
        )}
      <VideoCard
        title={videoLastEvent.name}
        video={videoLastEvent.video}
        description={videoLastEvent.content}
      />
      </ul>
    </Container>
  );
};

export default NewsList;
