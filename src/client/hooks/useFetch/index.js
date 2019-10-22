import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [response, setResponse] = useState({});
    const [error, setError] = useState(null);

    const fetchData = async () => {
        const response = await fetch(url);

        response
            .json()
            .then(response => setResponse(response))
            .catch(error => setError(error));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { response, error };
};

export default useFetch;