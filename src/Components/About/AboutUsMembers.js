import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import CustomCard from "../Card/CustomCard";
import AboutUsMembersItem from "./AboutUsMembersItem";
import membersApiActions from "../../Services/membersService";
import "../../Styles/CardStyle.css";

const AboutUsMembers = () => {
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = () => {
    membersApiActions
      .getMembers()
      .then((response) => setMembersData(response.data.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const showAboutUsMembers = () =>
    membersData.map((member) => <AboutUsMembersItem member={member} />);

  return (
    <div>
      <Container className="ContainerList">
        <ul className="list-container">{showAboutUsMembers()}</ul>
      </Container>
    </div>
  );
};

export default AboutUsMembers;
