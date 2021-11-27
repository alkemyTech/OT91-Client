import React from "react";
import { useHistory } from 'react-router-dom';
import { Container } from "@mui/material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const CustomCard = ({ title, img, description,button,path }) => {
  const { push } = useHistory();

  return (
    <Container sx={{ display: "inline-flex" }}>
      <Card sx={{
          width:345,
          m:2,
          boxShadow: 15,
          borderRadius:3,
          display: 'flex',
          flexDirection:'column',
      }}>
        <CardMedia
          component="img"
          height="200"
          image={
            img
            ?img
            :'https://image.freepik.com/free-vector/shining-circle-purple-lighting-isolated-dark-background_1441-2396.jpg'
          }
          alt="Organization image"
        />
        <CardContent
          sx={{
            height:90,
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {title || ''}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
            }}
          >
            {description || ''}
          </Typography>
        </CardContent>
        <CardActions>
          {button
          ?
          <Button
            size="small"
            color="button"
            variant="contained"
            onClick={()=>push({path})}
          >
            <Typography variant="string" color="white">
              {button}
            </Typography>
          </Button>
          :<div></div>
          }
        </CardActions>
      </Card>
    </Container>
  );
};

export default CustomCard;

