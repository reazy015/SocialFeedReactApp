import React from 'react';
import MemoPost from './PostComponent/PostComponent';

const FeedsWrapper = ({posts}) => {
    return (
        <div className={posts.length > 1 ? 'feeds-wrapper' : 'simple'}>
            {posts.map(post => <MemoPost key={post.id} {...post}/>)}
        </div>
    );
};

export default FeedsWrapper;