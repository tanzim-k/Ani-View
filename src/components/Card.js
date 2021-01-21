import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { SearchContext } from '../context/search'
import {
    Typography,  // used to present design and content
    Link,  // customize anchor elements with your theme colors and typography styles
    Paper, // physical properties of paper are translated to the screen
    GridListTile,
    Grid
} from '@material-ui/core'
import './Card.css'

const Card = (props) => {
    const history = useHistory()

    const search = useContext(SearchContext)

    const onClickHandler = (event) => {
        event.preventDefault();
        fetch(`https://api.jikan.moe/v3/anime/${props.anime.mal_id}`)
            .then((response) => response.json())  // turns response into JSON
            .then((data) => {
                search.setSingle(data);   // Sets data as single data
                localStorage.setItem('singleData', JSON.stringify(data)); // data is stored to browser
                history.push('/focus'); // redirects to focus page
            });
    };
    const title = props.anime.title.length > 20 ? `${props.anime.title.substring(0, 20)}...`    // displays the title of anime
        : props.anime.title
    const imageURL = props.anime.image_url  // displays anime image
    const synopsis = props.anime.synopsis.length > 50 ? `${props.anime.synopsis.substring(0, 50)}...` : props.anime.synopsis  // displays anime synopsis

    return (
        <GridListTile className="anime-card-container">
            <Grid container item xs={12}>
                <Paper className="anime-card-paper">
                    <img src={imageURL} alt={title} style={{ maxHeight: 300 }} />
                    <Typography variant="h5" component="h2">{title}</Typography>
                    <Typography variant="body2" component="h2" paragraph={true}>{synopsis}</Typography>
                    <Link
                        component="button"
                        variant="body1"
                        style={{ marginBottom: 0 }}
                        onClick={onClickHandler}>
                        More Info
                    </Link>
                </Paper>

            </Grid>
        </GridListTile>
    )
}

export default Card