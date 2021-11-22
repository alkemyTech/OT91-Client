import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Container, Box } from "@mui/material";
import TableFooter from "@mui/material/TableFooter";
import Logo from "../../Assets/Logo/Logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
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
          <Box
            sx={{
              display: { md: "flex" },
              justifyContent: { xs: "center" },
              alignItems: { xs: "center" },
            }}
          >
            <Link to="">
              <FacebookIcon sx={{ fontSize: 40 }} />
            </Link>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <p>Facebook</p>
            </Box>
          </Box>

          <Box
            sx={{
              display: { md: "flex" },
              justifyContent: { xs: "center" },
              alignItems: { xs: "center" },
            }}
          >
            <Link to="">
              <LinkedInIcon sx={{ fontSize: 40 }} />
            </Link>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <p>Linkedin</p>
            </Box>
          </Box>

          <Box
            sx={{
              display: { md: "flex" },
              justifyContent: { xs: "center" },
              alignItems: { xs: "center" },
            }}
          >
            <Link to="">
              <InstagramIcon sx={{ fontSize: 40 }} />
            </Link>
            <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
              <p>Instagram</p>
            </Box>
          </Box>

          <Box
            sx={{
              display: { md: "flex" },
              justifyContent: { xs: "center" },
              alignItems: { xs: "center" },
            }}
          >
            <Link to="">
              <TwitterIcon sx={{ fontSize: 40 }} />
            </Link>
            <Box sx={{ display: { xs: "none", md: "inline-block" } }}>
              <p>Twitter</p>
            </Box>
          </Box>
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
