import React, { useEffect, useState } from "react";
import "../../Styles/CardStyle.css";
import { listHasValues } from "../../Utils/validation";
import Title from "../Title/Title";
import CustomCard from "../Card/CustomCard";
import { Container } from "@mui/material";
import VideoCard from "../Card/VideoCard";
import LoadingSpinner from "../../Utils/loadingSpinner";

const videoLastEvent={
  name: 'Asistencia a comedores comunitarios en Buenos Aires.',
  content:'Donación de 42 toneladas de alimentos para 5 comedores comunitarios en el partido de San Martín, Buenos Aires, que diariamente atienden a 1210 personas.',
  video:'https://youtu.be/4YnSk1gI_Oo'
};

const NewsList = ({ lastNews }) => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    lastNews && setIsLoading(false);
  }, [lastNews]);

  const newsListHasValues = listHasValues(lastNews);
  return (
    <Container className="ContainerList">
      {!loading ? (
        <div className="spinner">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <Title title="Novedades" />
          {/* <ul className="list-grid-container ">
            {newsListHasValues ? (
              lastNews.map((news) => {
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
          </ul> */}
          <VideoCard
            title={videoLastEvent.name}
            video={videoLastEvent.video}
            description={videoLastEvent.content}
        />
        </div>
      )}
    </Container>
  );
};

export default NewsList;
