import React, {Fragment} from 'react';
import MemoPost from './PostComponent/PostComponent';
import propTypes from 'prop-types';

const FeedsWrapper = ({posts, error}) => {
    let output;

    if (posts.length && !error.message) {
        output = <div className={posts.length > 1 ? 'feeds-wrapper' : ''}>
            {posts.map(post => <MemoPost key={post.id} {...post}/>)}
        </div>
    }

    if(error.message) output = <div className='error'>{error.message}</div>;

    return (
        <Fragment>
            {output}
        </Fragment>
    );
};

FeedsWrapper.propTypes = {
    posts: propTypes.array
};

export default FeedsWrapper;