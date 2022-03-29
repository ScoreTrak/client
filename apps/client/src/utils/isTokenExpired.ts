import {ScoreTrakJwtPayload} from "../types/scoretrak_jwt_payload";

export default function isTokenExpired(decodedToken: ScoreTrakJwtPayload) {
    let current_time = new Date().getTime() / 1000
    if (decodedToken.exp) {
        return current_time > decodedToken.exp
    }
    return false
}