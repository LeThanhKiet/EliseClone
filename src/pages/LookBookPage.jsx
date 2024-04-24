import React, { useEffect, useState } from "react";
import LookBookItem from "../components/LookBookItem";
import MainButton from "../components/MainButton";

import axios from "axios";

const LookBookPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/collection");
                setData(response.data);
                setLoading(false);

                console.log(response.data);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();

        return () => {};
    }, []);

    return (
        <div className="max-w-full overflow-x-hidden">
            <div className="mt-20">
                <ul className="p-10">
                    {data.map((item) => (
                        <li key={item.id} className="mb-10">
                            <LookBookItem data={item} />
                        </li>
                    ))}
                </ul>
                <MainButton content="Xem thêm +" />
            </div>
        </div>
    );
};

export default LookBookPage;
