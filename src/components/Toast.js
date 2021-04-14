import React from 'react';
import styled from 'styled-components';

const StyledToast = styled.section`
    background: #010754;
    padding: 40px 30px;
    margin-top: 82px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;

    h2 {
        line-height: 1.6rem;
    }
    
    h2, p {
        color: #a7c442;

        span {
            font-weight: bold;
            color: #f6f6eb;
        }
    }

    p {
        font-size: 1rem;
        line-height: 1.2rem;
        padding: 10px 0 20px;
    }
`;

const Link = styled.a`
    font-size: 1rem;
    color: #060b04;
    display: inline-block;
    border-radius: 5px;
    transition: 0.25s box-shadow, 0.25s transform;
    padding: 10px 25px;
    border: 1px solid #010754;
    background: #010754;
    color: #a7c442;
    border: 1px solid #a7c442;
    box-shadow: 1px 1px #f83a11, 2px 2px #f83a11, 3px 3px #f83a11, 4px 4px #f83a11, 5px 5px #f83a11,
        6px 6px #f83a11;
    font-weight: 500;
    max-width: 280px;
    text-align: center;

    @media (min-width: 1024px) {
        padding: 15px 40px;
    }

    &:hover,
    &:focus {
        box-shadow: unset;
        transform: translate(0.3em, 0.2em);
    }
`

const Toast = () => (
    <StyledToast>
        <h2>Take action with the <span>#NoEncampmentEvictions</span> toolkit</h2>
        <p>At this juncture, encampment residents face a new challenge - imminent eviction from encampments at the hands of the city. While encampment residents strategize on what to do next, we've designed a toolkit to educate you and help you advocate and push back against the city’s attempts to displace people from their communities and homes.</p>
        <Link aria-label="External link to the Encampment Support Networks encampment eviction toolkit." href="https://docs.google.com/document/d/1HR1Ix9bg5zKhX_OsHgaI6i_27zRYIGoNwd3PP7FWJ8U/edit">Access the toolkit</Link>
    </StyledToast>
);

export default Toast;