// useApi.js
import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            setData(null);
            setLoading(true);
            setError(null);
        };
    }, [url]);

    return { data, loading, error };
};

export default useApi;
