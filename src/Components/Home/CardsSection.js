import { Container, Grid, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomCard from '../Card/CustomCard'

const CardsSection = ({title, button, getInformation}) => {
    const [cardsInfo, setCardsInfo] = useState([]);
    useEffect(() => {
        getInformation().then(res => {
            setCardsInfo(res.slice(-4));
            console.log(cardsInfo)
        })
    },[])
    return (
        <Container sx={{display:'flex', flexDirection:'column', alignItems:'center', my:5, gap:3}}>
            <Typography variant="h4">{title}</Typography>
            <Grid container columnSpacing={1} sx={{justifyContent:'space-around'}}>
                {cardsInfo && cardsInfo.map(card => (
                    <Grid item>
                        <CustomCard title={card.name} img={card.image} description={card.content}/>
                    </Grid>
                ))}
            </Grid>
            {button && <Button component={Link} to={button.to} variant="outlined">{button.text}</Button>}
        </Container>
    )
}

export default CardsSection;
