import styled from "styled-components";

export const Control = styled.input.attrs({
  type: "number",
  min: 0,
  max: 100,
})`
  background: transparent;
  color: white;
  border: none;
  width: 50px;
  height: 25px;
`;

export const HueControl = styled.input.attrs({
  type: "number",
  min: 0,
  max: 360,
})`
  background: transparent;
  color: white;
  border: none;
  width: 50px;
  height: 25px;
`;

// export const HueControl = styled(Control).attrs({
//   max: 360,
// })``;
