import React from "react";

// Mã QR
import QR from "../assets/codepr.jpg";

// Logo Bộ Công Thương
import BoCongThuong from "../assets/bocongthuong.png";

import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#faf9f8]">
            <div className="flex justify-around pt-6 mx-20">
                <div className="text-center">
                    <h3 className="uppercase font-bold mb-3">Thông tin</h3>
                    <h5 className="mb-2">Công ty tnhh thời trang Elise</h5>
                    <h5 className="mb-2">235 - Hoàng Quốc Việt - Hà Nội</h5>
                    <h5 className="mb-2">0903452128</h5>
                    <h5 className="mb-2">thanhkiet722000@gmail.com</h5>
                    <h5 className="mb-2">MST: 0108393204</h5>
                </div>
                <div className="text-center">
                    <h3 className="uppercase font-bold mb-3">Liên Hệ</h3>
                    <a href="">
                        <h5 className="mb-2">Giới thiệu</h5>
                    </a>
                    <a href="">
                        <h5 className="mb-2">Tin tức</h5>
                    </a>
                    <a href="">
                        <h5 className="mb-2">Hệ thống cửa hàng</h5>
                    </a>
                    <a href="">
                        <h5 className="mb-2">Trợ giúp</h5>
                    </a>
                </div>
                <div className="text-center">
                    <h3 className="uppercase font-bold mb-3">Hỗ trợ khách hàng</h3>
                    <a href="">
                        <h5 className="mb-2">Hướng dẫn mua hàng</h5>
                    </a>
                    <a href="">
                        <h5 className="mb-2">Đăng ký tài khoản</h5>
                    </a>
                    <a href="">
                        <h5 className="mb-2">Chính sách giao hàng</h5>
                    </a>
                    <a href="">
                        <h5 className="mb-2">Chính sách hoàn tiền</h5>
                    </a>
                    <a href="">
                        <h5 className="mb-2">Hướng dẫn thanh toán qua Instagram</h5>
                    </a>
                </div>
                <div className="flex items-center">
                    <img class="w-20 h-20" src={QR} alt="" />
                </div>
            </div>

            <div className="bg-white">
                <div className="pt-20 flex justify-center">
                    <div className="px-3 flex items-center">
                        <FaFacebookF className="mr-1" />
                        <a href="">FACEBOOK</a>
                    </div>
                    <div className="px-3 flex items-center">
                        <FaInstagram className="mr-1" />
                        <a href="">INSTAGRAM</a>
                    </div>
                    <div className="px-3 flex items-center">
                        <FaYoutube className="mr-1" />
                        <a href="">YOUTUBE</a>
                    </div>
                    <div className="px-3 flex items-center">
                        <FaTiktok className="mr-1" />
                        <a href="">TIKTOK</a>
                    </div>
                </div>
                <p className="py-2 text-center">© Elise 2020. All rights reserved</p>
                <div class="flex justify-center">
                    <img className="w-40 h-auto" src={BoCongThuong} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
