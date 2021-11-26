import Title from "../Title/Title";
import { Box, Grid } from "@mui/material";
import "../../Styles/Container.css";
import LoadingSpinner from "../../Utils/loadingSpinner";
import {
  LinkedinCompanyProfile,
  LinkedinFollowCompany,
  TwitterTweet,
} from "react-social-plugins";

const AboutUs = () => {
  const description = `Somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de:
        Educación, deportes, primera infancia, salud, alimentación y trabajo social.`;
  return (
    <>
     { description ? <div>
        <Box className="title-container">
            <Title title="Nosotros" />
            <div className="title-container-text">
              <p>{description}</p>
              <div>
                <Box className="linkedin-badge-container">
                  <div
                    className="badge-base LI-profile-badge"
                    data-locale="es_ES"
                    data-size="large"
                    data-theme="light"
                    data-type="HORIZONTAL"
                    data-vanity="corporación-somos-más-68737437"
                    data-version="v1"
                  ></div>
                </Box>
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
              </div>
            </div>
          </Box>
          <AboutUsMembers />
        </div>: <LoadingSpinner
            type="ThreeDots"
            color="#000000"
            height={50}
            width={100}
        />
      }
    </>
  );
};

export default AboutUs;
