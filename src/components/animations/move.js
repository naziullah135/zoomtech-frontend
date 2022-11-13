import { keyframes } from "@emotion/react";

export const moveAnimation = keyframes`
    // 0 %  { transform: rotate(0deg); transform-origin:bottom right;},
    // 25%  { transform:   rotate(90deg); transform-origin:bottom right; },
    // 50%  { transform:   rotate(180deg); transform-origin:bottom right; },
    // 75%  { transform:   rotate(270deg); transform-origin:bottom right; },
    // 100% { transform:   rotate(360deg); transform-origin:bottom right; }
    // 0 %  { transform: rotate(0deg); },
    // 25%  { transform:   rotate(90deg); transform-origin:bottom right; },
    // 50%  { transform:   rotate(180deg); transform-origin:top right; },
    // 75%  { transform:   rotate(270deg);transform-origin:bottom left;  },
    // 100% { transform:   rotate(360deg); transform-origin:top left; }
`;