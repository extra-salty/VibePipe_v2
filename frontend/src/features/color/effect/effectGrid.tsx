import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { EffectButton } from "./effectButton.style";
import { effects } from "./effects";
import { onClickEffectButton } from "../colorSlice";

export const EffectGrid = () => {
  const effectGridState = useAppSelector(state => state.color.effectGrid);
  const dispatch = useAppDispatch();

  return (
    <>
      {effects.map((effect, i) => {
        return (
          <EffectButton
            disabled={effect.isDisabled}
            key={effect.name}
            isDisabled={effect.isDisabled}
            isActive={effectGridState[i]}
            onClick={() => dispatch(onClickEffectButton(i))}>
            {effect.name}
          </EffectButton>
        );
      })}
    </>
  );
};
