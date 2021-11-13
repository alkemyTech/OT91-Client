import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import Title from "../../Title/Title";
import getActivityId from '../../../Services/activityService'
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
      .then((activityData) => {
          setActivity(activityData);
          stripedHtml();
        })
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
