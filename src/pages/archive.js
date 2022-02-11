import React from 'react';
import Posts from '../content/posts.json';

const InstaPost = ({ imgSrc, text }) => {
    return (
        <div>
            <img src={imgSrc} alt={imgSrc} />
            <p>{text}</p>
        </div>
    )
}

const ArchivePage = () => {
    return (
        <div>
            {Posts.map(({ media }) => media.map(post => <InstaPost imgSrc={post.uri} text={post.title} />))}
            <img src="posts/202011/127101154_2758693281085782_8503532527424500313_n_17853348389367292.jpg" alt="plz work"/>
            hi world
        </div>
    )
};

export default ArchivePage;