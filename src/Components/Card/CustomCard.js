import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
