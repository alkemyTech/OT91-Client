import React from 'react';
import ReactPlayer from "react-player";
import Grid from '@mui/material/Grid/Grid';
import Button from "@mui/material/Button/Button";
import IconButton from "@mui/material/IconButton/IconButton";
import {
    Bookmark,
    PlayArrow,
    FastRewind,
    FastForward,
    Pause
} from "@mui/icons-material";

const VideoPlayer = ({video}) => {

    return (
        <div>
            <ReactPlayer
                url={video}
                width='100%'
                height='100%'
                config = { {
                    youtube : {
                        playerVars : {
                            controls : 0,
                            fs:0,
                            modestbranding:1,
                            showinfo:0
                        }
                    }
                }}
            />
            <div>
                <Grid
                    container
                    direction='row'
                    alignItems='center'
                    justify='center'
                >
                    <IconButton>
                        <FastRewind fontSize='inherit'/>
                    </IconButton>
                    <IconButton>
                        <PlayArrow fontSize='inherit'/>
                    </IconButton>
                    <IconButton>
                        <FastForward fontSize='inherit'/>
                    </IconButton>
                </Grid>
            </div>
        </div>
    );
}

export default VideoPlayer;
