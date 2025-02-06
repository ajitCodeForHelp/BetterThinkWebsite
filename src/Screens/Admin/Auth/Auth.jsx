import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../Admin.css";

function Auth() {
    const token = true;
    const nav = useNavigate()
    return (
        <>
            {
                token ? <Outlet /> : nav("/adminLogin")
            }
        </>
    )
}
export default Auth;