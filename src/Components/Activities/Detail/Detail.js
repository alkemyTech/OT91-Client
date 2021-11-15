import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea  from "@mui/material/CardActionArea";
import Title from "../../Title/Title";
import getActivity from '../../../Services/activityService'
import "../../../Styles/CardStyle.css";

const Detail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState("");
  const [activityDescription, setActivityDescription] = useState("");

  const stripedHtml = useCallback(() => {
    activity.description &&
      setActivityDescription(activity.description.replace(/<[^>]+>/g, ""));
  }, [activity.description]);

  useEffect(() => {
    getActivity(id)
      .then((response) => {
          setActivity(response.data.data);
          stripedHtml();
        })
      .catch((err) => {
        console.log(err);
      });
  }, [stripedHtml]);

  return (
    <Card className="cardStyle">
      <CardActionArea>
        <CardMedia>
          <Title
            title={activity.name}
            image={activity.image}
            key={activity.id}
          />
        </CardMedia>
        <CardContent>
          <Typography>{activityDescription}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Detail;
