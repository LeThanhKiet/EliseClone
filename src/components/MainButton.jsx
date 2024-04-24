import React from "react";

const MainButton = (props) => {
    return (
        <div className="pb-7 mb-5 flex justify-center items-center">
            <a className="px-9 py-3 font-bold text-white uppercase bg-black duration-500 hover:bg-[#a68242]" href="">
                {props.content}
            </a>
        </div>
    );
};

export default MainButton;
