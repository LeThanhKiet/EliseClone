import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const RegisterPage = () => {
    const [dataVn, setDataVn] = useState([]);

    return (
        <div className="max-w-full overflow-x-hidden">
            <div className="mt-20 flex justify-center items-center">
                <div className="py-20 w-3/5">
                    <h2 className="text-2xl uppercase font-bold mb-5">Thông tin cá nhân</h2>
                    <form className="">
                        <div className="">
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-1/2 border-b py-2 mb-10 mr-2 focus:outline-none focus:border-b-black"
                            />
                        </div>
                        <div className="flex">
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                className="w-1/2 border-b py-2 mb-10 focus:outline-none focus:border-b-black"
                            />
                            <input
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                                className="w-1/2 border-b py-2 mb-10 focus:outline-none focus:border-b-black"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Họ tên đệm"
                                className="w-1/2 border-b py-2 mb-10 focus:outline-none focus:border-b-black"
                            />
                            <input
                                type="password"
                                placeholder="Tên"
                                className="w-1/2 border-b py-2 mb-10 focus:outline-none focus:border-b-black"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Địa chỉ"
                                className="w-1/2 border-b py-2 mb-10 focus:outline-none focus:border-b-black"
                            />
                            <input
                                type="text"
                                placeholder="Ghi chú"
                                className="w-1/2 border-b py-2 mb-10 focus:outline-none focus:border-b-black"
                            />
                        </div>
                        <div className="flex">
                            <div className="w-1/2 flex flex-col justify-between">
                                <p className="text-[#666666] text-xs">Quốc gia</p>
                                <h3>Việt Nam</h3>
                            </div>

                            <div className="w-1/2">
                                <p className="text-[#666666] text-xs">Số điện thoại</p>
                                <span className="w-1/3 py-2">+84</span>
                                <input
                                    type="text"
                                    placeholder="SĐT"
                                    className="w-2/3 py-2 ml-2 flex-1 border-b focus:outline-none focus:border-b-black"
                                />
                            </div>
                        </div>

                        <div className="mt-10 mb-7">
                            <div className="mt-3">
                                <input type="checkbox" className="mr-2 relative top-0.5" />
                                <span>Nhận tin tức và khuyến mại mới nhất từ Elise qua email</span>
                            </div>
                            <div className="mt-3">
                                <input type="checkbox" className="mr-2 relative top-0.5" />
                                <span>Tôi đồng ý Điều kiện - Điều khoản & Chính sách bảo mật của Elise</span>
                            </div>
                        </div>

                        <div>
                            <button className="w-1/3 bg-black py-3 mb-4 text-white uppercase duration-500 hover:bg-[#a68242]">
                                Tạo tài khoản
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
