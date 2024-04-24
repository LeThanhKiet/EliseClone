import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

// logo page
import logo from "../assets/logo_color.png";

const Navbar = ({ isOpen, onClose }) => {
    const [dropMenuStatus, setDropMenuStatus] = useState(false);
    const [dropMenuPKStatus, setDropMenuPKStatus] = useState(false);

    const handleDropMenu = () => {
        setDropMenuStatus(!dropMenuStatus);
    };

    const handleDropPKMenu = () => {
        setDropMenuPKStatus(!dropMenuPKStatus);
    };

    // const [isOpen, setIsOpen] = useState(isShows);
    // const toggleNavBar = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        isOpen && (
            <div className="h-screen w-80 border-2 shadow-lg fixed z-[10000] bg-white">
                <div>
                    <div className="flex justify-end py-3 mr-3">
                        <button className="text-2xl" onClick={onClose}>
                            <MdOutlineClose />
                        </button>
                    </div>

                    <div className="px-8 mb-10">
                        <div className="">
                            <Link to="/" onClick={onClose}>
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="px-8">
                        <ul className="uppercase">
                            <li className="my-3 font-bold duration-500 hover:text-[#a68242]">
                                <Link to="/lookbook" onClick={onClose}>
                                    Bộ sưu tập
                                </Link>
                            </li>
                            <li className="my-3 font-bold duration-500 hover:text-[#a68242]">
                                <a className="" href="">
                                    Thời trang nữ
                                </a>
                                <button className="relative top-0.5 left-2" onClick={handleDropMenu}>
                                    <FaChevronRight />
                                </button>
                            </li>
                            {dropMenuStatus && (
                                <ul className="px-4">
                                    <li className="my-3 duration-500 hover:text-[#a68242]">
                                        <a href="">Đầm</a>
                                    </li>
                                    <li className="my-3 duration-500 hover:text-[#a68242]">
                                        <a href="">Áo</a>
                                    </li>
                                    <li className="my-3 duration-500 hover:text-[#a68242]">
                                        <a href="">Chân váy</a>
                                    </li>
                                    <li className="my-3 duration-500 hover:text-[#a68242]">
                                        <a href="">Quần</a>
                                    </li>
                                </ul>
                            )}
                            <li className="my-3 font-bold duration-500 hover:text-[#a68242]">
                                <Link className="" to="/phu-kien">
                                    Phụ kiện
                                </Link>
                                <button className="relative top-0.5 left-2" onClick={handleDropPKMenu}>
                                    <FaChevronRight />
                                </button>
                            </li>
                            {dropMenuPKStatus && (
                                <ul className="px-3">
                                    <li className="my-3 duration-500 hover:text-[#a68242]">
                                        <a href="">giày</a>
                                    </li>
                                    <li className="my-3 duration-500 hover:text-[#a68242]">
                                        <a href="">Túi</a>
                                    </li>
                                    <li className="my-3 duration-500 hover:text-[#a68242]">
                                        <a href="">Phụ kiện</a>
                                    </li>
                                </ul>
                            )}
                            <li className="my-3 duration-500 font-bold hover:text-[#a68242]">
                                <a className="" href="">
                                    Elise Story
                                </a>
                            </li>
                            <li className="my-3 duration-500 font-bold hover:text-[#a68242]">
                                <a className="" href="">
                                    Thẻ thành viên
                                </a>
                            </li>
                            <li className="my-3 duration-500 font-bold hover:text-[#a68242]">
                                <a className="" href="">
                                    Hệ thống cửa hàng
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    );
};

export default Navbar;
