import Nav from "../components/Nav";
import {Outlet} from "react-router-dom";
import {Box, Toolbar} from "@mui/material";

// @ts-ignore
export default function DefaultLayout() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )

}
