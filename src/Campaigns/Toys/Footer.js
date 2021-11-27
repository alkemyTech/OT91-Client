import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Container, Box } from "@mui/material";
import TableFooter from "@mui/material/TableFooter";
import Logo from "../../Assets/Logo/logo.png";
import { Link } from "react-router-dom";
export const Footer = () => {
  const socialMediaIconStyle = { fontSize: 40 };
  const socialMediaList = [
    { name: "Instagram", icon: <InstagramIcon sx={socialMediaIconStyle} /> },
    { name: "Facebook", icon: <FacebookIcon sx={socialMediaIconStyle} /> },
    { name: "Twitter", icon: <TwitterIcon sx={socialMediaIconStyle} /> },
    { name: "LinkedIn", icon: <LinkedInIcon sx={socialMediaIconStyle} /> },
  ];

  const socialMediaBox = () =>
    socialMediaList.map((media) => (
      <Box
        sx={{
          display: { md: "flex" },
          justifyContent: { xs: "center" },
          alignItems: { xs: "center" },
        }}
      >
        <Link to="">{media.icon}</Link>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <p>{media.name}</p>
        </Box>
      </Box>
    ));

  return (
    <TableFooter
      sx={{
        display: { xs: "flex" },
        justifyContent: { xs: "center" },
        alignItems: { xs: "center" },
        justifyContent: { xs: "space-evenly" },
        flexDirection: { xs: "column" },
      }}
    >
      <Container
        sx={{
          display: { xs: "grid", sm: "flex" },
          justifyContent: { xs: "center" },
          alignItems: { xs: "center" },
        }}
      >
        <Box
          sx={{
            display: { xs: "flex" },
          }}
        >
          <img src={Logo} alt="Logo de la ONG" />
        </Box>

        <Box
          sx={{
            display: { xs: "flex" },
            alignItems: { xs: "center" },
            justifyContent: { xs: "space-evenly" },
            width: { xs: "100%" },
          }}
        >
          {socialMediaBox()}
        </Box>
      </Container>
      <Box
        sx={{
          display: { xs: "flex" },
          justifyContent: { xs: "center" },
          alignItems: { xs: "center" },
          justifyContent: { xs: "space-evenly" },
          width: { xs: "100%" },
        }}
      >
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <Link to="">Visita nuestra página</Link>
        </Box>
        <Box sx={{ display: { xs: "none", xl: "flex" } }}>
          <Link to="">Campaña Escolar</Link>
        </Box>
      </Box>
    </TableFooter>
  );
};

export default Footer;
