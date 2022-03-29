import {JwtPayload} from "jwt-decode";
import { Role } from "./role";

export type ScoreTrakJwtPayload = JwtPayload & {
    username: string,
    team_id: string,
    role: Role
}
