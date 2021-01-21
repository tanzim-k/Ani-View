import React from 'react'
import Card from './Card.js'
import { GridList } from '@material-ui/core'

const AnimeList = (props) => {  // information to display
    return (
        <GridList>
            {props.data.map((anime) => (
                <Card key={anime.mal_id} anime={anime} />
            ))}
        </GridList>
    )
}

export default AnimeList