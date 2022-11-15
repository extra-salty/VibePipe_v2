import styled from "styled-components";
import {
  IconPalette,
  IconShadow,
  IconDropletFilled2,
  IconSun,
} from "@tabler/icons";

const props = `
  width: 25px;
  height: 25px;
  color: white;
  stroke-width: 1.5;
`;

export const HueIcon = styled(IconPalette)`
  ${props}
`;

export const SaturationIcon = styled(IconDropletFilled2)`
  ${props}
`;

export const LightnessIcon = styled(IconShadow)`
  ${props}
`;

export const BrightnessIcon = styled(IconSun)`
  ${props}
`;
