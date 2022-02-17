import React from 'react';
import styled from 'styled-components';
import Nav from '../components/nav/Nav';
import GlobalStyle from '../styles/globalStyles';
import tweets from '../content/tweets.json';
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

const TweetText = ({ tweetText }) => {
  const linkRegex = /(https:\/\/:*[0-9a-zA-Z/.#]*)/g;
  const tagRegex = /(@:*[0-9a-zA-Z/.#_]*)/g;

  const stringSplit = tweetText.split(linkRegex).reduce((acc, curr) => {
    if (curr.match(linkRegex)) {
      acc.push(curr);
      return acc;
    }

    const nextSplit = curr.split(tagRegex);
    return [...acc, ...nextSplit];
  }, []);

  const final = [];

  stringSplit.forEach((split) => {
    const linkMatch = split.match(linkRegex);
    const tagMatch = split.match(tagRegex);
    if (linkMatch) {
      const link = <a target="_blank" href={linkMatch}>{linkMatch}</a>;
      return final.push(link);
    }

    if (tagMatch) {
      const tagLink = <a target="_blank" href={`https://twitter.com/${tagMatch}`}>{tagMatch}</a>;
      return final.push(tagLink);
    }

    const other = <span>{split}</span>;
    return final.push(other);
  });

  return <p>{final}</p>;
};

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
      </div>
    </StyledTweet>
  );
};

const ArchivePage = () => {
  const tweetsByDate = tweets.sort((a, b) => new Date(b.tweet.created_at) - new Date(a.tweet.created_at));
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <PageWrapper>
        <TweetWrapper>
          {tweetsByDate.map(({ tweet: { full_text, favorite_count } }) => (
            <Tweet tweetText={full_text} />
          ))}
        </TweetWrapper>
      </PageWrapper>
    </div>
  );
};

export default ArchivePage;