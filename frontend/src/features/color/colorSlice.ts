import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { effects } from "./effect/effects";

const initialEffectGrid: boolean[] = Array(effects.length).fill(false);
const initialLedGrid: string[][] = Array(24)
  .fill(null)
  .map(e => Array(12).fill("#FFF"));

type InitialState = {
  hue: number;
  saturation: number;
  lightness: number;
  brightness: number;
  effectGrid: boolean[];
  ledGrid: string[][];
};

const initialState: InitialState = {
  hue: 0,
  saturation: 100,
  lightness: 50,
  brightness: 0,
  effectGrid: initialEffectGrid,
  ledGrid: initialLedGrid,
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setHue: (state, action: PayloadAction<string>) => {
      state.hue = Number(action.payload);
    },
    setSaturation: (state, action: PayloadAction<string>) => {
      state.saturation = Number(action.payload);
    },
    setLightness: (state, action: PayloadAction<string>) => {
      state.lightness = Number(action.payload);
    },
    resetEffectGrid: state => {
      return;
    },
    onClickEffectButton: (state, action: PayloadAction<number>) => {
      const newEffectGrid = [...initialEffectGrid];
      newEffectGrid[action.payload] = true;
      state.effectGrid = newEffectGrid;
    },
    onClickLedButton: (state, action: any) => {
      const { i, j } = action.payload;
      state.ledGrid[i][
        j
      ] = `hsl(${state.hue} ${state.saturation}% ${state.lightness}%)`;
    },
    onMouseEnterLedButton: (state, action: any) => {
      const { i, j } = action.payload;
      state.ledGrid[i][j] = `hsl(${state.hue} 100% 50%)`;
    },
    onMouseDownLedButton: (state, action: any) => {
      const { i, j } = action.payload;
      state.ledGrid[i][j] = `hsl(${state.hue} 100% 50%)`;
    },
    onMouseUpLedButton: (state, action: any) => {
      const { i, j } = action.payload;
      state.ledGrid[i][j] = `hsl(${state.hue} 100% 50%)`;
    },
  },
});

export const colorReducer = colorSlice.reducer;
export const {
  setHue,
  setSaturation,
  setLightness,
  onClickEffectButton,
  onClickLedButton,
  onMouseEnterLedButton,
  onMouseDownLedButton,
  onMouseUpLedButton,
} = colorSlice.actions;
