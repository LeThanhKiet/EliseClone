import React from "react";
// Test img
import img from "../assets/collections/cv-sunlit.jpg";

import { Link } from "react-router-dom";

const LookBookItem = ({ data }) => {
    return (
        <div className="flex">
            <div className="w-2/3">
                <Link to={{ pathname: `/lookbook/${data.name}`, state: { value: data } }}>
                    <img src={data?.images[0]} alt="" />
                </Link>
            </div>
            <div className="w-1/3 text-center flex flex-col justify-center items-center">
                <h1 className="uppercase font-bold text-2xl mb-2">{data.name}</h1>
                <p className="text-[#666666] mb-1">ELISE</p>
                <p>{new Date(data.publishDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
            </div>
        </div>
    );
};

export default LookBookItem;
