import {useEffect, useState} from "react";
import {useScoretrakApiClients} from "../contexts/ScoretrakApiClients";
import {LoginRequest} from "@scoretrak/scoretrakapis/scoretrak/auth/v1/auth_pb";
import grpcWeb from "grpc-web";
import useToken from '../hooks/useToken'

export default function useJwtAuth() {
    const {authServiceClient} = useScoretrakApiClients()
    const [token, setToken, removeToken] = useToken()
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>()

    useEffect(() => {
        if (token && token.length > 0) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
    }, [token])

    const signIn = async ({ username, password }: {username: string, password: string}, callback?: (error: grpcWeb.RpcError | null) => void) => {
        const loginRequest = new LoginRequest()
        loginRequest.setUsername(username)
        loginRequest.setPassword(password)
        try {
            const loginResponse = await authServiceClient.login(loginRequest, null)
            const responseToken = loginResponse.getAccessToken()
            setIsAuthenticated(true)
            setToken(responseToken)
            return null
        // @ts-ignore
        } catch (e: grpcWeb.RpcError) {
            return e
        }
    }

    function signOut() {
        removeToken()
        setIsAuthenticated(false)
    }

    return {
        isAuthenticated,
        signIn,
        signOut
    }
}