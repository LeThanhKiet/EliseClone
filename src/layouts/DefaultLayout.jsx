import React from "react";
import Header from "../components/Header";
import Info from "../components/Info";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Info />
            <Footer />
        </div>
    );
};

export default DefaultLayout;
