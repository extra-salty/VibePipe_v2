// import React from "react";
import styled from "styled-components";

interface EffectButtonProps {
  isDisabled: boolean;
  isActive: boolean;
}

export const EffectButton = styled.button<EffectButtonProps>`
  background-color: ${props =>
    props.isActive === false
      ? "rgba(200, 200, 200, 0.2)"
      : "rgba(200, 200, 200, 0.5)"};
  color: ${props =>
    props.isActive === false ? "hwb(0 100% 0% / 0.8)" : "hwb(0 100% 0% / 0.9)"};
  border: ${props =>
    props.isActive === false
      ? "1px solid rgba(233, 222, 222, 0.7)"
      : "1px solid rgba(233, 222, 222, 0.8)"};
  &:hover {
    background-color: rgba(236, 252, 251, 0.25);
    transition: 0.3s;
  }
  &:active {
    background-color: hsla(176, 73%, 96%, 0.5);
    transition: 0.2s;
  }
`;

// {
//     if (props.isReady) {
//       return props.isActive === false
//         ? "rgba(200, 200, 200, 0.2)"
//         : "rgba(200, 200, 200, 0.5)";
//     } else {
//       return "rgba(200, 200, 200, 0.8)";
//     }
//   }
