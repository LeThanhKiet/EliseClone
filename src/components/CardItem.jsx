import React, { useState } from "react";

// img
import img1 from "../assets/productImgTest/img1.jpg";
import img2 from "../assets/productImgTest/img2.jpg";

const CardItem = () => {
    const [isHover, setIsHover] = useState(false);
    const handleIsHover = () => {
        setIsHover(!isHover);
    };

    let img = isHover ? img1 : img2;
    return (
        <div className="w-1/4 h-auto p-4">
            <div className="py-3">
                <a href="">
                    <div>
                        <img
                            onMouseEnter={handleIsHover}
                            onMouseLeave={handleIsHover}
                            className="transition duration-500 delay-0 ease-in hover:ease-out"
                            src={img}
                            alt=""
                        />
                    </div>
                </a>
            </div>
            <div className="uppercase text-center">
                <h5>Đầm kem đuôi cá nơ eo</h5>
                <p>2.098.000 VND</p>
            </div>
        </div>
    );
};

export default CardItem;
