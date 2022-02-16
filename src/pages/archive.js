import React from 'react';
import styled from 'styled-components';
import Nav from '../components/nav/Nav';
import GlobalStyle from '../styles/globalStyles';
import ProfilePic from '../content/profilepic.jpg';
import posts from '../content/posts.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
`;

const PageWrapper = styled.div`
  margin-top: 100px;
`;

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

const InstaText = ({ instaText }) => {
	const tagRegex = /(@:*[0-9a-zA-Z/.#_]*)/g;

	const stringSplit = instaText.split(tagRegex);
	const final = [];

	stringSplit.forEach((split) => {
		const tagMatch = split.match(tagRegex);
		if (tagMatch) {
			const tagLink = <a href={`https://www.instagram.com/${tagMatch.substring(1)}`}>{tagMatch}</a>;
			return final.push(tagLink);
		}

		const other = <span>{split}</span>;
		return final.push(other);
	});

	return <p><strong>Encampment Support Network</strong> {final}</p>;
};

const InstaPost = ({ post }) => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
	};

	if (post.media.length > 1) {
		return (
			<StyledInstagramPost>
				<StyledHeader>
					<img src={ProfilePic} alt="" />
					<p><strong>Encampment Support Network</strong></p>
				</StyledHeader>
				<Slider {...settings}>
					{post.media.map(({ uri }) => (
						<ImageWrapper>
							<img src={uri} alt="" />
						</ImageWrapper>
					))}
				</Slider>
				<InstaText instaText={post.media.title} />
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
						<img src={post.media[0].uri} alt="" />
					</ImageWrapper>
			<InstaText instaText={post.media[0].title}/>
		</StyledInstagramPost>
	);
};

const ArchivePage = () => {
	return (
		<div>
			<GlobalStyle />
			<Nav />
			<PageWrapper>
				<Wrapper>
					{posts.map(post => <InstaPost post={post} />)}
				</Wrapper>
			</PageWrapper>
		</div>
	);
};

export default ArchivePage;