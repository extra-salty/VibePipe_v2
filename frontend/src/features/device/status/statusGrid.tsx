import { useAppSelector, useAppDispatch } from "../../../app/hooks";
// import { useEffect } from "react";
import { OnboardLED } from "./onboardLedButton.style";
import { setOnboardLed } from "../deviceSlice";

export const StatusGrid = () => {
  const onboardLedState = useAppSelector(state => state.device.onboardLed);
  const dispatch = useAppDispatch();

  const setOnboardLedState = (state: string) => {
    dispatch(setOnboardLed(state !== "0"));
  };

  const handleOnboardLedState = (onboardLedState: boolean) => {
    fetch("/led", { method: "PUT", body: onboardLedState ? "0" : "1" })
      .then(response => response.text())
      .then(state => setOnboardLedState(state))
      .catch(error => console.log("Error: ", error));
  };

  // useEffect(() => {
  //   fetch("/led")
  //     .then(response => response.text())
  //     .then(state => setOnboardLedState(state))
  //     .catch(error => console.log("Error: ", error));
  // });

  return (
    <>
      <OnboardLED onClick={() => handleOnboardLedState(onboardLedState)} />
    </>
  );
};
