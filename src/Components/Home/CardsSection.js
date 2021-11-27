import { Container, Grid, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomCard from '../Card/CustomCard'

const CardsSection = ({title, button, getInformation}) => {
    const [cardsInfo, setCardsInfo] = useState([]);
    useEffect(() => {
        getInformation().then(res => {
            setCardsInfo(res.slice(-3));
            console.log(cardsInfo)
        })
    },[])
    return (
        <Container sx={{display:'flex', flexDirection:'column', alignItems:'center', my:1,mb:7,mt:9}}>
            <Typography variant="h4">{title}</Typography>
            <Grid container sx={{m:3}}>
                {cardsInfo && cardsInfo.map(card => (
                    <Grid xs={4} >
                        <CustomCard title={card.name} img={card.image} description={card.content}/>
                    </Grid>
                ))}
            </Grid>
            {button && <Button component={Link} to={button.to} variant="outlined">{button.text}</Button>}
        </Container>
    )
}

export default CardsSection;
