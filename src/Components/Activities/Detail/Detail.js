import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Card,CardContent,CardMedia,Typography,CardActionArea} from "@mui/material";
import Title from "../../Title/Title";
import getActivityById from '../../../Services/activityService'
import "../../../Styles/CardStyle.css";
import LoadingSpinner from "../../../Utils/loadingSpinner";

const Detail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [loading, setIsLoading] = useState(true);

  const stripedHtml = useCallback(() => {
    activity.description &&
      setActivityDescription(activity.description.replace(/<[^>]+>/g, ""));
  }, [activity.description]);

  useEffect(() => {
    getActivityById(id)
      .then((activityData) => {
          setActivity(activityData);
          stripedHtml();
          setIsLoading(false);
        })
  }, [stripedHtml]);

  return (
    <>{ loading ? <LoadingSpinner/>
    :
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
    }
    </>
  );
};

export default Detail;
