import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Card,CardContent,CardMedia,Typography,CardActionArea} from "@mui/material";
import Title from "../../Title/Title";
import { getById } from "../../../app/activitiesReducer/activitiesReducer";
import { useSelector } from "react-redux";
import "../../../Styles/CardStyle.css";
import { useDispatch } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const activity = useSelector(state => state.activities.activity);
  const [activityDescription, setActivityDescription] = useState("");

  const stripedHtml = useCallback(() => {
    activity.description &&
      setActivityDescription(activity.description.replace(/<[^>]+>/g, ""));
  }, [activity.description]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(id));
    stripedHtml();
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
