import React from 'react';
import { Container } from '@mui/material';
import {Card,CardContent,Typography} from '@mui/material';
import VideoPlayer from '../common/VideoPlayer/VideoPlayer';

const VideoCard = ({title,video,description}) => {

    return (
        <Container sx={{ display: 'inline-flex' }}>
            <Card sx={{ maxWidth: 345 }}>
                <div>
                    <VideoPlayer video={video} />
                </div>
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

export default VideoCard;
