import { useEffect, useRef } from 'react';

const useFeedInterval = (callback, delay) => {
    const currentCallback = useRef();

    useEffect(() => {
        currentCallback.current = callback;
    }, [callback]);

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
}

export default useFeedInterval;
