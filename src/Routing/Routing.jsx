import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContectUs from "../Screens/Admin/Screens/ContectUS";
import Auth from "../Screens/Admin/Auth/Auth";
import AdminLogin from "../Screens/Admin/Auth/AdminLogin";
import MergeComponents from "../Screens/Admin/Components/MergeComponents";
import Message from "../Screens/Admin/Screens/Message";
import Home from "../Screens/Customer/Screens/Home";
import ContactForm from "../Screens/Customer/Screens/Form/ContactForm";
import Overwork from "../Screens/Customer/Screens/OverWork/Overwork";
import Aboutus from "../Screens/Customer/Screens/AboutUs/Aboutus";
import ScrollToTop from "../Screens/Customer/CommonComponent/ScrollToTop/ScrolltoTop";

function Routing() {
    return (
        <BrowserRouter>
            <ScrollToTop />  {/* Add this component here */}
            <Routes>
                <Route path="/adminLogin" element={<AdminLogin />} />
                <Route path="/admin" element={<Auth />}>
                    <Route path="Query" element={<MergeComponents getComponent={<ContectUs />} />} />
                    <Route path="ContectUs" element={<MergeComponents getComponent={<Message />} />} />
                </Route>
                <Route path="/" element={<Home />} />
                <Route path="/contactform" element={<ContactForm />} />
                <Route path="/overwork" element={<Overwork />} />
                <Route path="/aboutus" element={<Aboutus />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
