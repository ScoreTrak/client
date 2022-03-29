import useToken from "./useToken";
import jwtDecode from "jwt-decode";
import {ScoreTrakJwtPayload} from "../types/scoretrak_jwt_payload";
import {useEffect, useState} from "react";

export default function useDecodedToken() {
    const [token] = useToken()
    const [decodedToken, setDecodedToken] = useState<ScoreTrakJwtPayload>()

    useEffect(() => {
        if (token && token.length > 0) {
            setDecodedToken(jwtDecode<ScoreTrakJwtPayload>(token))
        }
    }, [token])

    return [decodedToken]
}