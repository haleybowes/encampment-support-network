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

  @media (min-width: 1024px) {
    flex-basis: calc(100%/3 - 20px);
  }

  a {
    text-transform: lowercase;
  }

  video {
    max-width: 100%;
    margin-top: 30px;
    border-radius: 5px;
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

const StyledTwitterAsset = styled.img`
  max-width: 100%;
  margin-top: 30px;
  border-radius: 5px;
`;

const StyledProfilePic = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
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

const Tweet = ({ tweetText, likes, asset, video: extended_entities }) => {
  const video = extended_entities && extended_entities.media && extended_entities.media[0].video_info && extended_entities.media[0].video_info.variants.find(video => video.content_type === 'video/mp4').url;

  return (
    <StyledTweet>
      <StyledProfilePic src={ProfilePic} alt="" />
      <div className="tweet-body">
        <div>
          <p className="tweet-body-title">
            <strong>Encampment Support Network Toronto</strong>
          </p>
          <TweetText tweetText={tweetText} />
          {asset && !video && <StyledTwitterAsset src={asset} alt="" />}
          {video && <video controls><source src={video} type="video/mp4" /></video>}
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
          {tweetsByDate.map(({ tweet: { full_text, favorite_count, entities, extended_entities } }, index) => (
            <Tweet key={index} tweetText={full_text} asset={entities.media && entities.media[0].media_url} video={extended_entities}/>
          ))}
        </TweetWrapper>
      </PageWrapper>
    </div>
  );
};

export default ArchivePage;