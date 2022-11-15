import { Link } from "react-router-dom";
import { StatusGrid } from "../features/device/status/statusGrid";
import { HsvGrid } from "../features/color/hsv/hsvGrid";
import { EffectGrid } from "../features/color/effect/effectGrid";
import { LEDGrid } from "../features/color/led/ledGrid";
import { SettingsButton } from "./settingsButton.style";

export const Home = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Link to="/settings">
          <SettingsButton />
        </Link>
      </div>
      <div className="deviceGrid">
        <StatusGrid />
      </div>
      <div className="controlGrid">
        <HsvGrid />
      </div>
      <div className="effectGrid">
        <EffectGrid />
      </div>
      <div className="ledGrid">
        <LEDGrid />
      </div>
    </div>
  );
};
