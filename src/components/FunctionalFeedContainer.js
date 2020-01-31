import React from 'react';
import propTypes from 'prop-types';
import useFeedInterval from '../customHooks/useFeedIntervalHook';
import FeedsWrapper from './FeedsWrapper';

const FunctionalFeedContainer = ({url, step, interval}) => {

    const [posts, error] = useFeedInterval(url, step, interval);

    return <FeedsWrapper posts={posts} error={error}/>;
};

FunctionalFeedContainer.propTypes = {
    url: propTypes.string.isRequired,
    step: propTypes.number.isRequired,
    interval: propTypes.number.isRequired
};


export default FunctionalFeedContainer;
