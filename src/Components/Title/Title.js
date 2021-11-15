import { useState, useEffect } from "react";
import {Box} from "@mui/material";

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
        }}
      >
        {title}
      </Box>
    </div>
  );
}

export default Title;
