import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import CustomCard from "../Card/CustomCard";
import AboutUsMembersItem from "./AboutUsMembersItem";
import membersApiActions from "../../Services/membersService";
import "../../Styles/CardStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../app/aboutUsReducer/aboutUsReducer";

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
    <div>
      <Container className="ContainerList">
        <ul className="list-container">{showAboutUsMembers()}</ul>
      </Container>
    </div>
  );
};

export default AboutUsMembers;
