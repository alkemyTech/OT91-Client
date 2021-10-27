import { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";

import DefaultImage from "../../assets/default.jpg";

export default function Title(props) {
  const imageMock =
    "https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80";
  const titleMock = "Title";

  const [titleImage, setTitleImage] = useState("");

  useEffect(() => {
    !imageMock ? setTitleImage(DefaultImage) : setTitleImage(imageMock);
  }, []);

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${titleImage})`,
          height: "200px",
          width: "100%",
          position: "relative",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "48px",
          lineHeight: "72px",
          textAlign: "center",
          letterSpacing: "-0.015em",
          color: "#000000"
        }}
      >
        {titleMock}
      </Box>
    </div>
  );
}
