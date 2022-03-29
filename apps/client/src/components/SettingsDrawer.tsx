import {Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar} from "@mui/material";
import { Link } from 'react-router-dom'


export default function SettingsDrawer() {
    return (
        <>
            <Drawer variant={'permanent'} sx={{ flexShrink: 0 }}>
                <Toolbar />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to={'/settings/teams'}>
                            <ListItemText primary={'Teams'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to={'/settings/users'}>
                            <ListItemText primary={'Users'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to={'/settings/hosts-groups'}>
                            <ListItemText primary={'Host Groups'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to={'/settings/hosts'}>
                            <ListItemText primary={'Hosts'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to={'/settings/service-groups'}>
                            <ListItemText primary={'Service Groups'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to={'/settings/services'}>
                            <ListItemText primary={'Services'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to={'/settings/properties'}>
                            <ListItemText primary={'Properties'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to={'/settings/rounds'}>
                            <ListItemText primary={'Rounds'} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}