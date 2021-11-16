import React, { useEffect, useState } from "react";
import "../../Styles/CardStyle.css";
import { listHasValues } from "../../Utils/validation";
import Title from "../Title/Title";
import CustomCard from "../Card/CustomCard";
import { Container } from "@mui/material";
import LoadingSpinner from "../../Utils/loadingSpinner";

const NewsList = ({ lastNews }) => {
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    lastNews && setIsLoading(false);
  }, [lastNews]);

  const newsListHasValues = listHasValues(lastNews);
  return (
    <Container className="ContainerList">
      {loading ? (
        <div className="spinner">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <Title title="Novedades" />
          <ul className="list-container">
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
          </ul>
        </div>
      )}
    </Container>
  );
};

export default NewsList;
