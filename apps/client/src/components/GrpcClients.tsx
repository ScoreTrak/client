import {useEffect, useState} from "react";
import useAuthInterceptor from "../hooks/useAuthInterceptor";
import {HostnameProvider} from "../contexts/HostnameContext";
import {ScoretrakApiClientsProvider} from "../contexts/ScoretrakApiClients";

// @ts-ignore
export default function GrpcClients({ children }) {
    const authInterceptor = useAuthInterceptor()
    const [options, setOptions] = useState<{unaryInterceptors: ArrayLike<any>,streamInterceptors: ArrayLike<any>}>(() => {
        return {unaryInterceptors: [authInterceptor], streamInterceptors: [authInterceptor]}
    })

    useEffect(() => {
        setOptions({
            unaryInterceptors: [authInterceptor],
            streamInterceptors: [authInterceptor]
        })
    }, [authInterceptor])

    return (
        <>
            <HostnameProvider>
                <ScoretrakApiClientsProvider options={options}>
                    {children}
                </ScoretrakApiClientsProvider>
            </HostnameProvider>
        </>
    )
}
