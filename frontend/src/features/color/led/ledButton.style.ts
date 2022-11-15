import styled from "styled-components";

interface ledGridProps {
  color: string;
}

export const LEDButton = styled.button<ledGridProps>`
  background-color: ${props => props.color};
  color: hsla(0, 100%, 0%, 1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 6px;
  padding: 0;
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
