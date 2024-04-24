import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//img slider --- Test
import img1 from "../assets/Sliders/cv-0604.jpg";
import img2 from "../assets/Sliders/cv-blue.jpg";
import img3 from "../assets/Sliders/cv-muse_1.jpg";
import img4 from "../assets/Sliders/cv-tb.jpg";

const MainSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "0",
    };

    return (
        <Slider className="" {...settings}>
            <div>
                <img src={img1} alt="" />
            </div>
            <div>
                <img src={img2} alt="" />
            </div>
            <div>
                <img src={img3} alt="" />
            </div>
            <div>
                <img src={img4} alt="" />
            </div>
        </Slider>
    );
};

export default MainSlider;
