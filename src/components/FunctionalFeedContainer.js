import React, { useState, Fragment } from 'react';
import propTypes from 'prop-types';
import useFeedInterval from '../customHooks/useFeedIntervalHook';
import fetchData from '../utils/fetchData';
import FeedsWrapper from './FeedsWrapper';

const FunctionalFeedContainer = ({url, step, interval}) => {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(step);

    useFeedInterval(() => {
        customCallback();
    }, interval);

    const customCallback = async () => {
        try {
            const {data} = await fetchData(url, {limit});
            incrementLimit(step);
            setDataWithFetchResult(data, step);
        } catch (err) {
            console.log(err);
        }
    };

    const setDataWithFetchResult = (data, step) => {
        setPosts([...data.slice(-step)]);
    };

    const incrementLimit = (increment) => {
        setLimit(prevLimit => prevLimit + increment);
    }

    return (
        <Fragment>
            <FeedsWrapper posts={posts}/>
        </Fragment>
    );
};

FunctionalFeedContainer.propTypes = {
    url: propTypes.string.isRequired,
    step: propTypes.number.isRequired,
    interval: propTypes.number.isRequired
};


export default FunctionalFeedContainer;