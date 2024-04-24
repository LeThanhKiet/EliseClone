import React from "react";

import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

// logo page
import logo from "../assets/logo_color.png";
import Navbar from "./Navbar";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Navbar isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <div className={`w-full p-5 fixed top-0 z-[9999] bg-white shadow-md`}>
                <div className="pt-2 flex justify-between items-cente">
                    <div className="flex items-center ml-5">
                        <div className="relative top-0.5">
                            <button onClick={() => setIsOpen(true)}>
                                <CiMenuBurger className="text-2xl" />
                            </button>
                        </div>
                        <div className="px-1">
                            <Link to="/">
                                <img className="h-7 w-auto" src={logo} alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="px-5 ml-7">
                        <form>
                            <span className="mr-2 font-bold relative top-1">TÌM KIẾM</span>
                            <input
                                type="text"
                                className="border-b border-black bg-inherit focus:outline-none mr-2"
                            ></input>
                            <button className="relative top-2">
                                <CiSearch className="text-2xl" />
                            </button>
                        </form>
                    </div>
                    <div className="flex justify-between items-center mr-5">
                        <div className="flex px-2">
                            <AiOutlinePhone className="text-2xl" />
                            <h5 className="">Gọi ngay</h5>
                        </div>
                        <div className="flex px-2">
                            <CiUser className="text-2xl" />
                            <h5>Tài khoản</h5>
                        </div>

                        <div className="flex px-2">
                            <HiOutlineShoppingBag className="text-2xl" />
                            <span className="relative bottom-2">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
