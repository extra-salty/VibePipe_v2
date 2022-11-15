import styled from "styled-components";
import { IconSettings } from "@tabler/icons";

export const SettingsButton = styled(IconSettings)`
  width: 20px;
  height: 20px;
  color: white;
  stroke-width: 1.5;
  &:hover {
    stroke-width: 2;
  }
`;
