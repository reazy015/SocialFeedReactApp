import { useEffect, useRef, useState, useCallback } from 'react';
import fetchData from "../utils/fetchData";

const useFeedInterval = (url, step, delay) => {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(step);
    const [error, setError] = useState({});
    const currentCallback = useRef();

    const customCallback = useCallback(async () => {
        try {
            const {data} = await fetchData(url, {limit});
            setLimit(prevLimit => prevLimit + step);
            setPosts([...data.slice(-step)]);
        } catch (err) {
            setError(err);
            // console.log(err)
        }
    }, [limit]);

    useEffect(() => {
        currentCallback.current = customCallback;
    }, [customCallback]);

    useEffect(() => {
        currentCallback.current();
    }, []);

    useEffect(() => {
        const feed = () => {
            currentCallback.current();
        };

        let timerId = setInterval(feed, delay * 1000);
        return () => clearInterval(timerId);
    });

    return [posts, error];
}

export default useFeedInterval;
