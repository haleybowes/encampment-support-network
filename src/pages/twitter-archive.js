import React from 'react';
import styled from 'styled-components';
import Nav from '../components/nav/Nav';
import GlobalStyle from '../styles/globalStyles';
import tweets from '../data/tweets.json';
import ProfilePic from '../content/profilepic.jpg';

const StyledTweet = styled.div`
  display: flex;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;

  @media (min-width: 768px) {
    flex-basis: calc(50% - 20px);
  }

  a {
    text-transform: lowercase;
  }

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  .tweet-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-likes {
    padding-top: 10px;
    margin-top: 10px;
    border-top: 1px solid #010754;
  }
`;

const TweetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
`;

const PageWrapper = styled.div`
  margin-top: 100px;
`;

const Tweet = ({ tweetText, likes }) => {
  return (
    <StyledTweet>
      <img src={ProfilePic} alt="" />
      <div className="tweet-body">
        <div>
          <p className="tweet-body-title">
            <strong>Encampment Support Network Toronto</strong>
          </p>
          <TweetText tweetText={tweetText} />
        </div>
        <p className="post-likes">❤️ {likes}</p>
      </div>
    </StyledTweet>
  );
};

const ArchivePage = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <PageWrapper>
        <TweetWrapper>
          {tweets.map(({ tweet: { full_text, favorite_count } }) => (
            <Tweet tweetText={full_text} likes={favorite_count} />
          ))}
        </TweetWrapper>
      </PageWrapper>
    </div>
  );
};

export default ArchivePage;