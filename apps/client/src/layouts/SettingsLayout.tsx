import Nav from "../components/Nav";
import {Outlet} from "react-router-dom";
import SettingsDrawer from "../components/SettingsDrawer";
import {Box, Container, Toolbar} from "@mui/material";

// @ts-ignore
export default function SettingsLayout() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <Nav />
            <SettingsDrawer />
            <Container maxWidth='xl'>
                <Outlet />
            </Container>
        </>
    )

}
