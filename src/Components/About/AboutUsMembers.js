import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import CustomCard from "../Card/CustomCard";
import AboutUsMembersItem from "./AboutUsMembersItem";
import membersApiActions from "../../Services/membersService";
import "../../Styles/CardStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../app/aboutUsReducer/aboutUsReducer";
import { Grid, Button } from '@mui/material';
const AboutUsMembers = () => {
  const dispatch = useDispatch();
  const aboutUsMembersData = useSelector((state) => state.aboutUs.data);

  const showAboutUsMembers = () =>
    aboutUsMembersData.map((member) => (
      <AboutUsMembersItem member={member} key={member.id} />
    ));
  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <Container sx={{display:'flex', flexDirection:'column', alignItems:'center', my:1,mb:7,mt:9}}>
    <Grid container sx={{m:3}}>
        {showAboutUsMembers()}
      </Grid>
    </Container>
  );
};

export default AboutUsMembers;
