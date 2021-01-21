import { createContext } from 'react'

// need this declaration to reference throughout the application
export const SearchContext = createContext({
    animeData: [],
    singleData: {},
    search: () => { },
    setData: () => { },
    setSingle: () => { }
})