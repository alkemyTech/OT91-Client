import React from 'react';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {maxWidth,display} from '@material-ui/core'

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
                        {title? title : ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description? description : ""}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default CustomCard;
