import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import SignUp from "./signUp";
import FunnyBoard from "./Board/funnyBoard";

function Copyright() {
    return (
        <Typography varient="body2" color="textSecondary" align="center">
            {"Copyright ⓒ"}
            JohnSungEun, {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

function AppRouter() {

    return (
        <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="login"element={<Login />}/>
                <Route path="signup" element={<SignUp />} />
                <Route path="huibigo/funnyBoard" element={<FunnyBoard />}/>
              </Routes>
            </BrowserRouter>
            <Box mt={5}>
                <Copyright />
            </Box>
        </div>
    );
};

export default AppRouter;