import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { styled } from "@mui/system";
import { Outlet } from "react-router-dom";


const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

const Img = styled('img')({
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: 500,
    maxWidth: '100%'
});

const LayoutWrapper = styled('div')(({theme}) => ({
    margin: 24,
    width: 'auto',
    [theme.breakpoints.up("lg")]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: theme.breakpoints.values.lg

    }
}));
const AuthLayout = () => {
    return (
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <LayoutWrapper>
            <Outlet>
                
            </Outlet>
        </LayoutWrapper>
    </ThemeProvider>
);
}

export default AuthLayout;