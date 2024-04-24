import React from "react";
import Header from "../components/Header";
import MainSlider from "../components/MainSlider";
import Footer from "../components/Footer";
import CardItem from "../components/CardItem";
import Info from "../components/Info";
import MainButton from "../components/MainButton";

const HomePage = () => {
    return (
        <div className="max-w-full overflow-x-hidden">
            <div className="mt-20">
                <MainSlider />
                <h2 className="text-center text-3xl font-bold py-6 mt-7">NEW ARRIVAL</h2>
                <div className="flex flex-wrap justify-between px-4 mb-4">
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </div>
                <MainButton content="Xem Thêm" />
            </div>
        </div>
    );
};

export default HomePage;
