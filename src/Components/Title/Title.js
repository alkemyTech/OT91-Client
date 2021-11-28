import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import DefaultImage from "../../Assets/Title/default.jpg";

import "../../Styles/BoxStyle.css";

const Title = (props) => {
  const { title, image, id } = props;

  const [titleImage, setTitleImage] = useState("");

  useEffect(() => {
    const finalImage = image ? image : DefaultImage;
    setTitleImage(finalImage);
  }, [image]);

  return (
    <div>
      <Box
        className="boxStyle"
        key={id}
        sx={{
          backgroundImage: `url(${titleImage})`,
          position: "relative",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { lg: "50px", md: "45px", xs: "35px" },
            color: "white",
            textShadow: "black 1px 0 6px",
            position: "absolute",
            bottom: "12px",
            right: { lg: "50px", md: "30px", xs: "20px" },
          }}
        >
          {title}
        </Typography>
      </Box>
    </div>
  );
};

export default Title;
