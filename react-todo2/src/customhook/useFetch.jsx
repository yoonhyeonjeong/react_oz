import React, {useEffect, useState} from "react";

const useFetch = url => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setData(res);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    };
    useEffect(() => {
        fetchData();
    }, [url]);

    return {loading, data, fetchData};
};

export default useFetch;
