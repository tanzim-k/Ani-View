import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { SearchContext } from '../context/search.js'
import { FormControl, Input, IconButton, Grid } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import './Home.css'

const Home = () => {
    const history = useHistory()
    const search = useContext(SearchContext)
    const [input, setInput] = useState('')
    // useEffect(() => {
    //     search.search('Naruto').then((data) => {
    //         console.log(data)
    //     })
    // }, [search])

    const handleSearch = (event) => {
        event.preventDefault()
        search.search(input).then((data) => {
            console.log(data)
            search.setData(data.results)  // i just need the results from the array not the entire list of information(next page, prev page etc.)
            localStorage.setItem('myData', JSON.stringify(data.results))   // stores information in the browser  
            // JSON.stringify converts JS object to string
            history.push('/searchresults')  // takes user to results page
        })
    }


    return (
        <Grid container  // grid is equivalent to flexbox ---- image and search bar on home page are centered
            direction="column"
            justify="center"
            alignContent="center"
            alignItems="center">
            <Grid item>
                <Grid item>
                    <img
                        alt="characters"
                        src={process.env.PUBLIC_URL + '/projectimg.png'}
                        height={420}
                        width={720} />
                </Grid>
                <Grid item>
                    <form className="home-form">
                        <FormControl type="submit" className="home-formControl" >
                            <Input
                                placeholder="Search Anime Here!"
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                className="home-input"
                            />
                            <IconButton
                                className="home-iconButton"
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={!input}
                                onClick={handleSearch}
                            >
                                <SearchIcon />
                            </IconButton>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home