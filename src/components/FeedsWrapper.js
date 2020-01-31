import React, {Fragment} from 'react';
import MemoPost from './PostComponent/PostComponent';
import propTypes from 'prop-types';

const FeedsWrapper = ({posts, error}) => {
    if (error) {
        return  <div className='error'>{error.message}</div>
    }

    if (posts.length && !error) {
        return (
            <div className={posts.length > 1 ? 'feeds-wrapper' : ''}>
                {posts.map(post => <MemoPost key={post.id} {...post}/>)}
            </div>
        )
    }

    return null
};

FeedsWrapper.propTypes = {
    posts: propTypes.array
};

export default FeedsWrapper;