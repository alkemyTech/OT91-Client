import React from 'react';
import { Container } from '@material-ui/core';
import {Card,CardAction,CardContent,CardMedia,Button,Typography} from '@mui/material';

const CustomCard = ({title,img,description}) => {

    return (
        <Container sx={{ display: 'inline-flex' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                height="140"
                image={img? img.image : "https://via.placeholder.com/150"}
                alt="Organization image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title || ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description || ""}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default CustomCard;
