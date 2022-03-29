import {AppBar, Avatar, Box, Button, IconButton, MenuItem, Toolbar, Typography} from "@mui/material";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import AccountCircle from '@mui/icons-material/AccountCircle'
import {Link} from 'react-router-dom'

export default function Nav() {
    const { loggedIn, signOut } = useAuth()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position={"static"} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
                    <Toolbar>
                        {/*<IconButton component={Link} to={'/'} size={"large"} edge={"start"} color={"inherit"} aria-label={"menu"} sx={{ mr: 2 }}>*/}
                        {/*</IconButton>*/}
                        <Typography variant={"h6"} component={"div"} sx={{ flexGrow: 1 }}>
                            {import.meta.env.ST_COMP_NAME ?? "Scoretrak"}
                        </Typography>
                        <Box>
                            <Button component={Link} to={'/scoreboard'} color={'inherit'}>Scoreboard</Button>
                        </Box>
                        <Box>
                            <Button component={Link} to={'/settings'} color={'inherit'}>Settings</Button>
                        </Box>
                        {!loggedIn &&
                            <Button component={Link} to={'/auth/sign_in'} color={"inherit"}>Sign In</Button>
                        }
                        {loggedIn &&
                            <div>
                                <IconButton size="large" onClick={handleMenu} color='inherit'>
                                    <Avatar>A</Avatar>
                                </IconButton>
                                {/* <Menu>
                                    <MenuItem onClick={}
                                </Menu> */}
                                <Button variant="contained" color={'error'} onClick={() => signOut()}>Sign Out</Button>

                            </div>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
