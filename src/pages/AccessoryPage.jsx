import React from "react";

import banner from "../assets/Banner/assesory.jpg";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const AccessoryPage = () => {
    // mở link trong tab mới
    const handleRedirect = (e) => {
        e.preventDefault();
        const url = e.target.href;
        window.open(url, "_blank");
    };
    return (
        <div className="max-w-full overflow-x-hidden">
            <div className="mt-20">
                <div>
                    <img src={banner} alt="" className="w-full h-auto" />
                </div>
                <div className="py-5 flex justify-center">
                    <div className="px-3 flex items-center">
                        <FaFacebookF className="mr-1" />
                        <a
                            className="duration-500 hover:text-[#a68242]"
                            href="https://www.facebook.com/"
                            onClick={handleRedirect}
                        >
                            FACEBOOK
                        </a>
                    </div>
                    <div className="px-3 flex items-center">
                        <FaInstagram className="mr-1" />
                        <a
                            className="duration-500 hover:text-[#a68242]"
                            href="https://www.instagram.com/"
                            onClick={handleRedirect}
                        >
                            INSTAGRAM
                        </a>
                    </div>
                    <div className="px-3 flex items-center">
                        <FaYoutube className="mr-1" />
                        <a className="duration-500 hover:text-[#a68242]" href="">
                            YOUTUBE
                        </a>
                    </div>
                    <div className="px-3 flex items-center">
                        <FaTiktok className="mr-1" />
                        <a className="duration-500 hover:text-[#a68242]" href="">
                            TIKTOK
                        </a>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default AccessoryPage;
