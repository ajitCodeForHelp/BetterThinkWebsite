import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContectUs from "../Screens/Admin/Screens/ContectUS";
import Auth from "../Screens/Admin/Auth/Auth";
import AdminLogin from "../Screens/Admin/Auth/AdminLogin";
import MergeComponents from "../Screens/Admin/Components/MergeComponents";
import Message from "../Screens/Admin/Screens/Message";

function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/adminLogin" element={<AdminLogin />} />
                    <Route path="/admin" element={<Auth />}>
                        <Route path="Query" element={<MergeComponents getComponent={<ContectUs />} />} />
                        <Route path="ContectUs" element={<MergeComponents getComponent={<Message />} />} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routing;