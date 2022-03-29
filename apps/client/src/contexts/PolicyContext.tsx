import {GetRequest, GetResponse, Policy} from "@scoretrak/scoretrakapis/scoretrak/policy/v1/policy_pb";
import {createContext, useContext, useEffect, useState} from "react";
import {useScoretrakApiClients} from "./ScoretrakApiClients";

export const PolicyContext = createContext<Policy.AsObject | null>(null)

export function usePolicy() {
    return useContext(PolicyContext)
}

// @ts-ignore
export function PolicyProvider({ children }) {
    const {policyServiceClient} = useScoretrakApiClients()
    const [policy, setPolicy] = useState<Policy.AsObject | null>(null)

    useEffect(() => {
        const streamRequest = new GetRequest();
        const stream = policyServiceClient.get(streamRequest, {})
        stream.on('error', (err) => {
            console.error(err);
        })

        stream.on("data", (response) => {
            setPolicy(response.getPolicy()!.toObject())
        })

        return () => stream.cancel()
    }, [])

    return (
        <>
            <PolicyContext.Provider value={policy}>
                {children}
            </PolicyContext.Provider>

        </>
    )
}
