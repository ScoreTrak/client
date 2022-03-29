import {createContext, useContext, useState} from "react";

export const HostnameContext = createContext(import.meta.env.ST_SERVER_HOSTNAME)

export const useHostname = () => {
    return useContext(HostnameContext)
}

// @ts-ignore
export const HostnameProvider = ({ children }) => {
    const [hostname, setHostname] = useState(import.meta.env.ST_SERVER_HOSTNAME)

    return (
        <>
            <HostnameContext.Provider value={hostname}>
                {children}
            </HostnameContext.Provider>
        </>
    )
}