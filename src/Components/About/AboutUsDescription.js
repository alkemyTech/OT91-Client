import { Box, Typography } from "@material-ui/core";
import Title from "../Title/Title";
import '../../Styles/Container.css';

const AboutUsDescription = ({description}) => {
    return (
        <Box className="container-title">
            <Title title="Nosotros"/>
            <div className="container-title-text">
                <p>{description}</p>
            </div>
        </Box>
    )
}

export default AboutUsDescription;
