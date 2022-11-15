import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { LEDButton } from "./ledButton.style";
import { onClickLedButton } from "../colorSlice";

export const LEDGrid = () => {
  const ledGridState = useAppSelector(state => state.color.ledGrid);
  const dispatch = useAppDispatch();

  return (
    <>
      {ledGridState.map((ledColumn, i) => {
        return (
          <>
            {ledColumn.map((ledColor, j) => {
              return (
                <LEDButton
                  key={`${i}/${j}`}
                  color={ledColor}
                  onClick={() => dispatch(onClickLedButton({ i, j }))}>
                  {`${i}/${j}`}
                </LEDButton>
              );
            })}
          </>
        );
      })}
    </>
  );
};

/* // onMouseEnter={() => dispatch(onMouseEnterLedButton({ i, j }))}
// onMouseDown={() => dispatch(onMouseDownLedButton({ i, j }))}
// onMouseUp={() => dispatch(onMouseUpLedButton({ i, j }))} */
