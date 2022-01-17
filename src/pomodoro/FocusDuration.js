import React from 'react';
import { minutesToDuration } from '../utils/duration';

export default function FocusDuration({
  focusDuration, 
  setFocusDuration,
  session,
  disable,
}) {
  
  const handleClick = ({target}) => {
    if (target.className.includes("increase")) {
      //Increments the Focus Duration timer with a maximum time of 60 minutes
      setFocusDuration(prevDuration => Math.min(prevDuration + 5, 60));
    } else if (target.className.includes("decrease")){
      //Decrements the Focus Duration timer with a minimum time of 5 minutes
      setFocusDuration(prevDuration => Math.max(prevDuration - 5, 5));
    }
  };
  
  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          Focus Duration: {minutesToDuration(focusDuration)}
        </span>
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-secondary decrease"
            data-testid="decrease-focus"
            onClick={handleClick}
            disabled={!session ? !disable.focusBtns : disable.focusBtns}
          >
            <span className="oi oi-minus" />
          </button>
          <button
            type="button"
            className="btn btn-secondary increase"
            data-testid="increase-focus"
            onClick={handleClick}
            disabled={!session ? !disable.focusBtns : disable.focusBtns}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};
