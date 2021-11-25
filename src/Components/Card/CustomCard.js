import React from "react";
import { Container } from "@mui/material";
import {
  Card,
  CardAction,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const CustomCard = ({ title, img, description }) => {
  return (
    <Container sx={{ display: "inline-flex" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={
            img
              ? img
              : "https://image.freepik.com/free-vector/shining-circle-purple-lighting-isolated-dark-background_1441-2396.jpg"
          }
          alt="Organization image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title || ""}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description || ""}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CustomCard;
