import { Box, Typography } from "@material-ui/core";
import Title from "../Title/Title";
import '../../Styles/AboutUs.css';

const AboutUsDescription = ({description}) => {
    return (
        <Box className="about-us-description">
            <Title title="Nosotros"/>
            <div className="about-us-description__text">
                <p>{description}</p>
            </div>
        </Box>
    )
}

export default AboutUsDescription;
