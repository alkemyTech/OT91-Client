import AboutUsDescription from "./AboutUsDescription";

const AboutUs = () => {
    const description = `Somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de:
        Educación, deportes, primera infancia, salud, alimentación y trabajo social.`
    return (
        <>
            <AboutUsDescription description={description}/>
        </>
    )
}

export default AboutUs;
