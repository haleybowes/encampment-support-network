import React from 'react';
import styled from 'styled-components';
import Nav from '../components/nav/Nav';
import GlobalStyle from '../styles/globalStyles';
// import tweets from '../data/tweets.json';
import ProfilePic from '../content/profilepic.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

// const TweetText = ({ tweetText }) => {
//     const linkRegex = /(https:\/\/:*[0-9a-zA-Z/.#]*)/g;
//     const tagRegex = /(@:*[0-9a-zA-Z/.#_]*)/g;

//     const stringSplit = tweetText.split(linkRegex).reduce((acc, curr) => {
//         if (curr.match(linkRegex)) {
//             acc.push(curr);
//             return acc;
//         }

//         const nextSplit = curr.split(tagRegex);
//         return [...acc, ...nextSplit];
//     }, []);

//     const final = [];

//     stringSplit.forEach((split) => {
//         const linkMatch = split.match(linkRegex);
//         const tagMatch = split.match(tagRegex);
//         if (linkMatch) {
//             const link = <a href={linkMatch}>{linkMatch}</a>;
//             return final.push(link);
//         }

//         if (tagMatch) {
//             const tagLink = <a href={`https://twitter.com/${tagMatch}`}>{tagMatch}</a>;
//             return final.push(tagLink);
//         }

//         const other = <span>{split}</span>;
//         return final.push(other);
//     });

//     return <p>{final}</p>;
// };

// const Tweet = ({ tweetText, likes }) => {
//     return (
//         <StyledTweet>
//             <img src={ProfilePic} alt="" />
//             <div className="tweet-body">
//                 <div>
//                     <p className="tweet-body-title">
//                         <strong>Encampment Support Network Toronto</strong>
//                     </p>
//                     <TweetText tweetText={tweetText} />
//                 </div>
//                 <p className="post-likes">❤️ {likes}</p>
//             </div>
//         </StyledTweet>
//     );
// };

const ImageWrapper = styled.div`
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;

	img {
		max-width: 100%;
	}
`;

const StyledInstagramPost = styled.div`
  background-color: white;
  border-radius: 5px;
	margin-bottom: 10px;
	width: 100%;

  @media (min-width: 768px) {
		margin: 10px;
    width: calc(50% - 20px);
	}

	.slick-prev:before, .slick-next:before {
		font-size: 30px;
	}
	
	p {
		padding: 30px 10px 10px 10px;
	}

	.slick-prev {
		left: 15px;
    z-index: 100;
	}
	
	.slick-next {
		right: 25px;
	}
`;

const StyledHeader = styled.div`
	display: flex;
	padding: 10px;
	align-items: center;

	p {
		padding: 0;
	}


	img {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-right: 10px;
	}
`;

const InstaPost = ({ media }) => {
	console.log(media);
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
	};

	if (media.media.length > 1) {
		return (
			<StyledInstagramPost>
				<StyledHeader>
					<img src={ProfilePic} alt="" />
					<p><strong>Encampment Support Network</strong></p>
				</StyledHeader>
				<Slider {...settings}>
					{media.media.map(({ uri }) => (
						<ImageWrapper>
							<img src={uri} alt="" />
						</ImageWrapper>
					))}
				</Slider>
				<p><strong>Encampment Support Network</strong> {media.title}</p>
			</StyledInstagramPost>
		);
	}

	return (
		<StyledInstagramPost>
			<StyledHeader>
				<img src={ProfilePic} alt="" />
				<p><strong>Encampment Support Network</strong></p>
			</StyledHeader>
					<ImageWrapper>
						<img src={media.media[0].uri} alt="" />
					</ImageWrapper>
			<p><strong>Encampment Support Network</strong> {media.media[0].title}</p>
		</StyledInstagramPost>
	);
};

const carouselExample = {
	media: [
		{
			uri: 'https://placekitten.com/1000/1000',
			creation_timestamp: 1592834426,
			title: '',
		},
		{
			uri: 'https://placekitten.com/1000/1000',
			creation_timestamp: 1592834426,
			title: '',
		},
		{
			uri: 'https://placekitten.com/1000/1000',
			creation_timestamp: 1592834426,
			title: '',
		},
		{
			uri: 'https://placekitten.com/1000/1000',
			creation_timestamp: 1592834426,
			title: '',
		},
	],
	title:
		'Please share this widely- encampments. We\u00e2\u0080\u0099re hearing a lot of complaints about encampments in the media. What we don\u00e2\u0080\u0099t hear is how encampment residents are subject to all kinds of harassment by people in their neighborhoods (no joke, one encampment had someone throw golf balls at it from afar). Mayor John Tory last weekend even insinuated that people are living in encampments to prove a political point. This is definitely not the case. People are living in encampments because the city doesn\u00e2\u0080\u0099t provide long term housing options. We hope this little primer opens up conversations about why people are living in tents. A big big thank you to @michael.deforge for illustration and ESN volunteer @___deep_condition for initiating this piece, and to all the volunteers and outreach workers who refined the text .',
	creation_timestamp: 1592834427,
};

const singleExample = {
	media: [
		{
			uri: 'https://placekitten.com/1000/1000',
			creation_timestamp: 1592891805,
			title:
				'Donate Money or donate\n*Tents * Sleeping bags * Pillows * Water * Fire extinguishers * Gatorade * Larabars * Gift cards $25 for Sobeys, Dollarama,Tim Hortons, Shoppers Drug Mart, Freshco.  To arrange please email: report.on.toronto@gmail.com with subject line : Donations. Thank you kindly.',
		},
	],
};

const ArchivePage = () => {
	return (
		<div>
			<GlobalStyle />
			<Nav />
			<PageWrapper>
				{/* <TweetWrapper>
          {tweets.map(({ tweet: { full_text, favorite_count } }) => (
            <Tweet tweetText={full_text} likes={favorite_count} />
          ))}
				</TweetWrapper> */}
				<TweetWrapper>
					<InstaPost media={carouselExample} />
					<InstaPost media={singleExample} />
				</TweetWrapper>
				{/* {posts.map(({ media }) => media.map(post => <InstaPost text={post.title} img={post.uri} />))} */}
				{/* <img src="../data/posts/202107/224007698_564602658034815_5647380828995789387_n_17899425830139214.jpg" /> */}
			</PageWrapper>
		</div>
	);
};

export default ArchivePage;