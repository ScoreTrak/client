import {useEffect, useState} from "react";
import useToken from "./useToken";
import AuthInterceptor from "../lib/AuthInterceptor";

export default function useAuthInterceptor() {
    const [token] = useToken()
    const [authInterceptor, setAuthInterceptor] = useState<AuthInterceptor>(new AuthInterceptor(token ?? ""))

    useEffect(() => {
        setAuthInterceptor(() => {
            return new AuthInterceptor(token ?? "")
        })
    }, [token])

    return authInterceptor
}