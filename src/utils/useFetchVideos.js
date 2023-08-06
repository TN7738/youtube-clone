/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

const useFetchVideos = (endpoint) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        const data = await fetch(endpoint);
        const jsonData = await data.json();
        setVideos(jsonData.items);
    }

    return videos;
}

export default useFetchVideos;