import { createContext, useState } from "react";

import showsData from 'https://react-project-2-server.vercel.app/shows'

const ShowContext = createContext()

const ShowProvider = ({ children }) => {

    const [shows, setShows] = useState(showsData)
    const [ids, setIds] = useState(showsData.length + 1)

    return (
        <ShowContext.Provider value={{ shows, setShows, ids, setIds}}>
            {children}
        </ShowContext.Provider>

    )
}

export { ShowContext, ShowProvider}