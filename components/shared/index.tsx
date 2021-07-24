import React from 'react';
import styled, { keyframes } from 'styled-components';

export const NoneScrollStyle = () => {
    return <style jsx global>{`
        body {
            overflow: hidden;
            height:100vh;
            width:100%;
            position:absolute;
        }
    `}</style>
}

export const PushUpCardKeyFrame = keyframes`
    0% {
        opacity: 0;
        top: calc(20%);
    }

    100% {
        opacity: 1;
        top: 0;
    }
`;

export const PushUpNotFoundKeyFrame = keyframes`
    0% {
        top: -20%;
        opacity: 0;
    }

    100% {
        top: 0%;
        opacity 1;
    }
`;

