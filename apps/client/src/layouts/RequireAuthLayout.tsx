import {Outlet} from "react-router-dom";
import RequireAuth from "../components/auth/helpers/RequireAuth";
import Nav from "../components/Nav";

// @ts-ignore
export default function RequireAuthLayout() {
    return (
        <>
            <Nav />
            <RequireAuth>
                <Outlet />
            </RequireAuth>
        </>
    )

}
