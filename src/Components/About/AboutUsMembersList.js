import React from "react";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const AboutUsMembersList = ({ member }) => {
  return (
    <>
      <Card key={member.id}>
        <CardMedia
          component="img"
          height="140"
          image={member.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {member.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {member.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={member.facebookUrl} variant="body2">
            Facebook
          </Link>
          <Link href={member.linkedinUrl} variant="body2">
            LinkedIn
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default AboutUsMembersList;
