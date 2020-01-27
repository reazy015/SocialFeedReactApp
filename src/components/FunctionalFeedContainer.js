import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import useFeedInterval from '../customHooks/useFeedIntervalHook';
import FeedsWrapper from './FeedsWrapper';

const FunctionalFeedContainer = ({url, step, interval}) => {

    const [posts, error] = useFeedInterval(url, step, interval);

    return (
        <Fragment>
            <FeedsWrapper posts={posts} error={error}/>
        </Fragment>
    );
};

FunctionalFeedContainer.propTypes = {
    url: propTypes.string.isRequired,
    step: propTypes.number.isRequired,
    interval: propTypes.number.isRequired
};


export default FunctionalFeedContainer;
