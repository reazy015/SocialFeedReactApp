import React from 'react';
import MemoPost from './PostComponent/PostComponent';
import propTypes from 'prop-types';

const FeedsWrapper = ({posts}) => {
    return (
        <div className={posts.length > 1 ? 'feeds-wrapper' : ''}>
            {posts.map(post => <MemoPost key={post.id} {...post}/>)}
        </div>
    );
};

FeedsWrapper.propTypes = {
    posts: propTypes.array
};

export default FeedsWrapper;