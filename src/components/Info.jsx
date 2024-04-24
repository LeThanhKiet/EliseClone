import React from "react";

// mini logo
import logo1 from "../assets/InfoFooter/return.png";
import logo2 from "../assets/InfoFooter/support.png";
import logo3 from "../assets/InfoFooter/store.png";
import logo4 from "../assets/InfoFooter/shipping.png";

const Info = () => {
    const items = [
        {
            img: logo1,
            des: "7 NGÀY ĐỔI SẢN PHẨM NGUYÊN GIÁ",
            text: "Đổi trả sản phẩm trong 7 ngày",
        },
        {
            img: logo2,
            des: "Hotline 0903452128",
            text: "8h00 - 17h00, T2 - T7 (Giờ hành chính)",
        },
        {
            img: logo3,
            des: "Hệ thống cửa hàng",
            text: "120 cửa hàng trên toàn hệ thống",
        },
        {
            img: logo4,
            des: "Vận chuyển",
            text: "Đồng giá 30k toàn quốc",
        },
    ];
    return (
        <div>
            <ul className="bg-black text-white text-center flex justify-between flex-wrap">
                {items.map((item, index) => {
                    return (
                        <li key={index} className="w-1/4 border border-white border-solid border-l-0">
                            <div className="flex justify-center items-center py-4">
                                <img src={item.img} alt="" className="h-6 w-auto" />
                            </div>
                            <p className="uppercase">
                                <strong>{item.des}</strong>
                            </p>
                            <p className="mb-4">{item.text}</p>
                        </li>
                    );
                })}

                {/* <li className="w-1/4">
                    <div>
                        <img src={logo1} alt="" />
                    </div>
                    <p className="uppercase">
                        <strong>Hotline 0903452128</strong>
                        <p>8h00 - 17h00, T2 - T7 (Giờ hành chính)</p>
                    </p>
                </li>
                <li className="w-1/4">
                    <div>
                        <img src={logo2} alt="" />
                    </div>
                    <p className="uppercase">
                        <strong>Hotline 0903452128</strong>
                        <p>8h00 - 17h00, T2 - T7 (Giờ hành chính)</p>
                    </p>
                </li>
                <li className="w-1/4">
                    <div>
                        <img src={logo3} alt="" />
                    </div>
                    <p className="uppercase">
                        <strong>Hệ thống cửa hàng</strong>
                    </p>
                    <p>120 cửa hàng trên toàn hệ thống</p>
                </li>
                <li className="w-1/4">
                    <div>
                        <img src={logo4} alt="" />
                    </div>
                    <p className="uppercase">
                        <strong>Vận chuyển</strong>
                    </p>
                    <p>Đồng giá 30k toàn quốc</p>
                </li> */}
            </ul>
        </div>
    );
};

export default Info;
