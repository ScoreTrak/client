import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from 'react-router-dom'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';

export const adminListItems = (
    <div>
        <ListItem button component={Link} to="/settings">
            <ListItemIcon>
                <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary="Global Settings" />
        </ListItem>
        <ListItem button component={Link} to="/setup/teams">
            <ListItemIcon>
                <GroupIcon/>
            </ListItemIcon>
            <ListItemText primary="Manage Teams" />
        </ListItem>
        <ListItem button component={Link} to="/setup/users">
            <ListItemIcon>
                <PersonIcon/>
            </ListItemIcon>
            <ListItemText primary="Manage Users" />
        </ListItem>
        <ListItem button component={Link} to="/setup/host_groups">
            <ListItemIcon>
                <DesktopWindowsIcon/>
            </ListItemIcon>
            <ListItemText primary="Manage Host Groups" />
        </ListItem>
        <ListItem button component={Link} to="/setup/hosts">
            <ListItemIcon>
                <DesktopWindowsIcon/>
            </ListItemIcon>
            <ListItemText primary="Manage Hosts" />
        </ListItem>
        <ListItem button component={Link} to="/setup/service_groups">
            <ListItemIcon>
                <SettingsApplicationsIcon/>
            </ListItemIcon>
            <ListItemText primary="Manage Service Groups" />
        </ListItem>

        <ListItem button component={Link} to="/setup/services">
            <ListItemIcon>
                <SettingsApplicationsIcon/>
            </ListItemIcon>
            <ListItemText primary="Manage Services" />
        </ListItem>

        <ListItem button component={Link} to="/setup/properties">
            <ListItemIcon>
                <TextFieldsIcon/>
            </ListItemIcon>
            <ListItemText primary="Manage Properties" />
        </ListItem>
        <ListItem button component={Link} to="/setup/rounds">
            <ListItemIcon>
                <FlipCameraAndroidIcon/>
            </ListItemIcon>
            <ListItemText primary="Show Rounds Logs" />
        </ListItem>
    </div>
);