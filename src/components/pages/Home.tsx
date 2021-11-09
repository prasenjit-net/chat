import React from 'react';
import {Link, Paper, Typography} from "@mui/material";
import {useAuthentication} from "../layout/AuthenticationProvider";

export const Home = () => {
    const {user, signIn} = useAuthentication();
    return user ? (
        <Paper elevation={0} style={{flexGrow: 1}}>
            <Typography variant="h4">
                Welcome {user.displayName}
            </Typography>
        </Paper>
    ) : (
        <Paper elevation={0} style={{display: "flex", flexGrow: 1, alignItems: "center", justifyContent: "center"}}>
            <Typography variant="h4" align="center">Please
                <Link href="#" onClick={signIn}> Sign In</Link> to start a chat</Typography>
        </Paper>
    );
};
