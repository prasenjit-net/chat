import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useAuthentication} from "./AuthenticationProvider";

export const TitleBar = () => {
    const {user, signIn, signOut} = useAuthentication();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Chat - {user ? user.displayName : 'Guest'}
                </Typography>
                {user ? (
                    <Button color="inherit" onClick={signOut}>
                        Sign Out
                    </Button>
                ) : (
                    <Button color="inherit" onClick={signIn}>
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};
