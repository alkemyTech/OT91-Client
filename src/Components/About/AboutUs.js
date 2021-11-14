import Title from "../Title/Title";
import { Box } from "@material-ui/core";
import '../../Styles/Container.css';

const AboutUs = () => {
    const description = `Somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de:
        Educación, deportes, primera infancia, salud, alimentación y trabajo social.`
    return (
        <>
            <Box className="title-container">
                <Title title="Nosotros"/>
                <div className="title-container-text">
                    <p>{description}</p>
                </div>
            </Box>
        </>
    )
}

export default AboutUs;
