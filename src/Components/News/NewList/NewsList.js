import React, { useEffect, useState } from "react";
import "../../../Styles/CardStyle.css";
import { listHasValues } from "../../../Utils/validation";
import Title from "../../Title/Title"
import CustomCard from "../../Card/CustomCard";
import { Container } from "@mui/material";
import VideoCard from "../../Card/VideoCard";
import {videoLastEvent} from './videoEvent';
import CardSection from '../../Home/CardsSection';
import { getAll } from '../../../Services/newsServices';

const NewsList = () => {

  return (
    <Container className="ContainerList">
        <div>
          <Title title="Novedades" image='https://bit.ly/3nXJHGn' />
          <CardSection getInformation={getAll}/>
          <VideoCard
            title={videoLastEvent.name}
            video={videoLastEvent.video}
            description={videoLastEvent.content}
        />
        </div>
    </Container>
  );
};

export default NewsList;
