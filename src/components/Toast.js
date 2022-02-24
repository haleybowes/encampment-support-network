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
        color:  #f6f6eb;
    }

    p {
        color: #a7c442;
        font-size: 1.2rem;
        line-height: 1.4rem;
        padding: 10px 0 20px;
    }
`;

const Toast = () => (
    <StyledToast>
        <h2>Bye for now 👋</h2>
        <p><strong>Encampment Support Network is no longer active</strong>. This website is an archive of ESN's work. Thank you to everyone who supported our efforts, stood with their unhoused neighbours and helped people survive.</p>
    </StyledToast>
);

export default Toast;