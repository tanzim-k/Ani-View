import React from 'react'
import {
    Grid,
    Typography,
    Paper,
} from '@material-ui/core'
import './SingleAnime.css'

const SingleAnime = (props) => {
    console.log(props.info);
    const title = props.info.title;
    const imageURL = props.info.image_url;
    const rating = props.info.rating;
    const airing = String(props.info.airing);  // boolean returns true if airing or false if not airing
    //const broadcast = props.info.broadcast;
    const score = props.info.score;
    const url = props.info.url;
    const episodes = props.info.episodes
    return (
        <Grid
            className="single-anime-container"
            container
            spacing={10}
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
        >
            <Grid item>
                <img src={imageURL} alt={title} className="single-anime-image" width="300px" />
            </Grid>
            <Grid item>
                <Paper elevation={3} className="single-anime-description">
                    <Typography variant="h4" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Airing: {airing}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Episodes: {episodes}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Rating: {rating}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Score: {score}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <a href={url}>My Anime List</a>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};


export default SingleAnime