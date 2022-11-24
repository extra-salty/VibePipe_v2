import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { HueIcon, SaturationIcon, LightnessIcon } from "./icons.style";
import { HueSlider, SaturationSlider, LightnessSlider } from "./sliders.style";
import { Control, HueControl } from "./control.style";
import { setHue, setSaturation, setLightness } from "../colorSlice";
import { webSocket } from "../../..";

export const HsvGrid = () => {
  const { hue, saturation, lightness } = useAppSelector(state => state.color);
  const dispatch = useAppDispatch();

  const updateGlobalHSV = (hue: string) => {
    dispatch(setHue(hue));
    webSocket.send(`${hue}`);

    // fetch(`/hsv?hue=${hue}`, { method: "PUT", body: hue })
    //   .then(response => response.text())
    //   .catch(error => console.log("Error: ", error));
  };

  return (
    <>
      <HueIcon />
      <HueSlider
        value={hue}
        hue={hue}
        saturation={saturation}
        lightness={lightness}
        onChange={e => updateGlobalHSV(e.target.value)}
      />
      <HueControl
        value={hue}
        onChange={e => dispatch(setHue(e.target.value))}
      />
      <SaturationIcon />
      <SaturationSlider
        value={saturation}
        hue={hue}
        saturation={saturation}
        lightness={lightness}
        onChange={e => dispatch(setSaturation(e.target.value))}
      />
      <Control
        value={saturation}
        onChange={e => dispatch(setSaturation(e.target.value))}
      />
      <LightnessIcon />
      <LightnessSlider
        value={lightness}
        hue={hue}
        saturation={saturation}
        lightness={lightness}
        onChange={e => dispatch(setLightness(e.target.value))}
      />
      <Control
        value={lightness}
        onChange={e => dispatch(setLightness(e.target.value))}
      />
    </>
  );
};
