import {createContext, useContext, useEffect, useState} from "react";
import {User} from "@scoretrak/scoretrakapis/scoretrak/user/v1/user_pb";
import useJwtAuth from "../hooks/useJwtAuth";
import {useScoretrakApiClients} from "./ScoretrakApiClients";
import grpcWeb from "grpc-web";

interface AuthContextType {
    user: User.AsObject | null,
    loggedIn: Boolean,
    signIn: (username: string, password: string) => Promise<{success: boolean, error: grpcWeb.RpcError} | {success: boolean, error: null}>,
    signOut: () => Promise<void>,
}

// @ts-ignore
export const AuthContext = createContext<AuthContextType>()

export function useAuth() {
    return useContext(AuthContext)
}

// @ts-ignore
export function AuthProvider({ children }) {
    const {userServiceClient} = useScoretrakApiClients()
    const jwtAuth= useJwtAuth()
    const [user, setUser] = useState<User.AsObject | null>(null)
    const [loggedIn, setLoggedIn] = useState<Boolean>(false);

    useEffect(() => {
        if (jwtAuth.isAuthenticated) setLoggedIn(() => {
            return true
        })
    }, [jwtAuth.isAuthenticated])

    let signIn = async (username: string, password: string) => {
        const error = await jwtAuth.signIn({username, password})
        if (error) {
            console.log("error occured")
            return { success: false, error: error}
        }
        setLoggedIn(true)
        return {success: true, error: null}
    }

    let signOut = async () => {
        await jwtAuth.signOut()
        setLoggedIn(false)
    }

    let value = { user, loggedIn, signIn, signOut }

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    )
}