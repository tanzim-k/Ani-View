import React, { useEffect, useContext, useState } from 'react';
import AnimeList from '../components/AnimeList.js';   //import AnimeList to display 
import { SearchContext } from '../context/search.js'
import { Box, Typography } from '@material-ui/core'

const SearchResults = () => {
    const search = useContext(SearchContext)
    const [dataExists, setDataExists] = useState(true)

    useEffect(() => {
        if (search.animeData === undefined || search.animeData.length === 0) {  //if data is undefined or empty get from local storage
            try {
                search.setData(JSON.parse(localStorage.getItem('myData')));  // returns value of stored object
                setDataExists(true);
            } catch (error) {
                console.log(error);
                setDataExists(false);
            }
        }
    }, [search]);

    return (
        <Box mt={2}>
            {(dataExists && <AnimeList data={search.animeData} />) || ( // box is a wrapper component and is used for css needs mt is margin top 
                <Typography>No Data Exists</Typography>
            )}
        </Box>
    );
};

export default SearchResults