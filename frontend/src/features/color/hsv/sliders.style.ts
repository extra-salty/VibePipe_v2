import styled from "styled-components";

interface Props {
  hue?: number;
  saturation?: number;
  lightness?: number;
}

export const HueSlider = styled.input.attrs<Props>(props => ({
  type: "range",
  max: 360,
  style: {
    background: `linear-gradient(
    to right,
    hsl(0 ${props.saturation}% ${props.lightness}%),
    hsl(60 ${props.saturation}% ${props.lightness}%),
    hsl(120 ${props.saturation}% ${props.lightness}%),
    hsl(180 ${props.saturation}% ${props.lightness}%),
    hsl(240 ${props.saturation}% ${props.lightness}%),
    hsl(300 ${props.saturation}% ${props.lightness}%),
    hsl(360 ${props.saturation}% ${props.lightness}%)
    )`,
  },
}))<Props>`
  -webkit-appearance: none;
  height: 10px;
  width: 300px;
  margin: 10px 0;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid #000000;
    height: 15px;
    width: 15px;
    border-radius: 3px;
    background: ${props =>
      `hsl(${props.hue} ${props.saturation}% ${props.lightness}%)`};
  }
`;

export const SaturationSlider = styled(HueSlider).attrs<Props>(props => ({
  max: 100,
  style: {
    background: `linear-gradient(
    to right,
    hsl(${props.hue} 0% 100%),
    hsl(${props.hue} 50% ${props.lightness}%),
    hsl(${props.hue} 100% ${props.lightness}%)
    )`,
  },
}))``;

export const LightnessSlider = styled(HueSlider).attrs<Props>(props => ({
  max: 100,
  style: {
    background: `linear-gradient(
    to right,
    hsl(${props.hue} ${props.saturation}% 0%),
    hsl(${props.hue} ${props.saturation}% 25%),
    hsl(${props.hue} ${props.saturation}% 50%)
    )`,
  },
}))``;
