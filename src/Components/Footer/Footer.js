import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Container, Box, TableFooter } from "@mui/material";
import { getOrganizationInformation } from "../../Services/OrganizationInformation";

const Footer = () => {
  const [organizationInformation, setOrganizationInformation] = useState({});

  useEffect(() => {
    getOrganizationInformation().then((res) => {
      setOrganizationInformation(res.data);
    });
  }, []);

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
          justifyContent: { xs: "space-around" },
        }}
      >
        <Box
          sx={{
            display: { xs: "flex" },
            justifyContent: { xs: "center" },
            alignItems: { xs: "center" },
            flexDirection: { xs: "column" },
            width: { xs: "100%" },
          }}
        >
          <img src={organizationInformation.logo} alt="logo" />
          <p>{organizationInformation.name}</p>
        </Box>
        <Box
          sx={{
            display: { xs: "flex" },
            width: { xs: "100%" },
            justifyContent: { xs: "space-evenly" },
            alignItems: { xs: "center" },
            flexWrap: { xs: "wrap" },
          }}
        >
          <Box
            sx={{
              margin: "3px",
            }}
          >
            <Link to="/school-campaign" target="_blank">
              Campaña Escolar
            </Link>
          </Box>
          <Box
            sx={{
              margin: "3px",
            }}
          >
            <Link to="/toys-campaign" target="_blank">
              Campaña Juguetes
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "flex" },
            width: { xs: "100%" },
            justifyContent: { xs: "space-evenly" },
          }}
        >
          <a href={organizationInformation.facebook_url} target="_blank">
            <FacebookIcon sx={{ fontSize: 40 }} />
          </a>
          <a href={organizationInformation.linkedin_url} target="_blank">
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </a>
          <a href={organizationInformation.instagram_url} target="_blank">
            <InstagramIcon sx={{ fontSize: 40 }} />
          </a>
          <a href={organizationInformation.twitter_url} target="_blank">
            <TwitterIcon sx={{ fontSize: 40 }} />
          </a>
        </Box>
      </Container>
    </TableFooter>
  );
};

export default Footer;