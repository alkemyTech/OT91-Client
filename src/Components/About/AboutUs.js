import Title from "../Title/Title";
import { Box, Grid, Container } from "@mui/material";
import "../../Styles/Container.css";
import {
  LinkedinCompanyProfile,
  LinkedinFollowCompany,
  TwitterTweet,
} from "react-social-plugins";
import AboutUsMembers from "./AboutUsMembers";
import nosotros from "../../Assets/TitleImages/nosotros.jpg";

const AboutUs = () => {
  const description = `Somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de:
        Educación, deportes, primera infancia, salud, alimentación y trabajo social.`;
  return (
    <>
      <Box className="title-container">
        <Title title="Nosotros" image={nosotros} />
        <div className="title-container-text">
        </div>
      </Box>
      <h1>{description}</h1>
      <h1>TODAVIA NO TERMINE ESTA SECCION, SOLAMENTE MERGEO PARA ACTUALIZAR ALGUNAS COSAS PASADAS SOY JULIAN</h1>
      <div className="ContenedorCards">
      <AboutUsMembers />
      </div>
      <div>
          {/* <div
            className="badge-base LI-profile-badge"
            data-locale="es_ES"
            data-size="large"
            data-theme="light"
            data-type="HORIZONTAL"
            data-vanity="corporación-somos-más-68737437"
            data-version="v1"
          ></div> */}
          <div className="ContenedorTweets">
          <Container sx={{display:'flex', flexDirection:'column', alignItems:'center', my:1,mb:7,mt:9}}>
    <Grid container sx={{m:3}}>
    <TwitterTweet
          align="center"
          coversation="none"
          tweetId="1450535690199085058"
          theme="light"
          width={300}
          />
        <TwitterTweet
          align="center"
          coversation="none"
          tweetId="1440383594615042052"
          theme="light"
          width={300}
          />
        <TwitterTweet
          align="center"
          coversation="none"
          tweetId="1271501359658012675"
          theme="light"
          width={300}
          />
      </Grid>
    </Container>
          </div>
      </div>
    </>
  );
};

export default AboutUs;
