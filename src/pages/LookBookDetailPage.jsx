import React, { useEffect } from "react";

import img from "../assets/Banner/assesory.jpg";
import { useLocation, useParams } from "react-router-dom";

const LookBookDetailPage = (props) => {
    const { name } = useParams();

    // const { stateParam } = useLocation().state;

    // const passedData = props.location.state.value;

    useEffect(() => {
        const fetchData = async (name) => {
            try {
                const response = await axios.get(`http://localhost:5000/api/getOneCollection/${name}`);
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
        <div>
            <div className="max-w-full overflow-x-hidden">
                <div
                    className="mt-20 w-screen h-screen bg-cover bg-center"
                    style={{ backgroundImage: `url(${props.img})` }}
                ></div>
                <h1 className="">{}</h1>
            </div>
        </div>
    );
};

export default LookBookDetailPage;
