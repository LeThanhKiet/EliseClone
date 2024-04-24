import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="max-w-full overflow-x-hidden">
            <div className="mt-20 flex justify-center items-center">
                <div className="py-20 w-3/5">
                    <h2 className="text-2xl uppercase font-bold mb-5">Đăng nhập</h2>
                    <form>
                        <div className="flex mb-5">
                            <p className="mr-2 text-[#666666]">Bạn chưa có tài khoản?</p>
                            <Link
                                className="text-[#a68242] border-b border-[#a68242] hover:border-none"
                                to="/customer/account/register"
                            >
                                Tạo tài khoản
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <input
                                type="text"
                                placeholder="Địa chỉ email hoặc số điện thoại của bạn"
                                className="w-full border-b py-3 mb-10 focus:outline-none"
                            />
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                className="w-full border-b py-3 mb-3 focus:outline-none"
                            />
                        </div>
                        <div className="mb-5">
                            <Link className="text-[#666666] border-b border-[#a68242] hover:border-none">
                                Quên mật khẩu ?
                            </Link>
                            <div className="mt-3">
                                <input type="checkbox" className="mr-2 relative top-0.5" />
                                <span>Tôi đồng ý Điều kiện - Điều khoản & Chính sách bảo mật của Elise</span>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <button className="w-full bg-black py-3 mb-4 text-white uppercase duration-500 hover:bg-[#a68242]">
                                Đăng nhập
                            </button>
                            <button className="w-full bg-[#dc5246] py-3 mb-3 text-white uppercase duration-500 hover:bg-[#a68242]">
                                Đăng nhập bằng google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
