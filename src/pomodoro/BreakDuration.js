import React from 'react';
import { minutesToDuration } from '../utils/duration';

export default function BreakDuration({
  breakDuration, 
  setBreakDuration,
  session,
  disable,
}) {

  const handleClick = ({target}) => {
    if (target.className.includes("increase")) {
      //Increments Break Duration timer with a maximum of time of 15 minutes
      setBreakDuration(prevDuration => Math.min(prevDuration + 1, 15));
    } else if (target.className.includes("decrease")){
      //Decrements Break Duration timer with minimum time of 1 minute
      setBreakDuration(prevDuration => Math.max(prevDuration - 1, 1));
    }
  };
  
  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            Break Duration: {minutesToDuration(breakDuration)}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary decrease"
              data-testid="decrease-break"
              onClick={handleClick}
              disabled={!session ? !disable.breakBtns : disable.breakBtns}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary increase"
              data-testid="increase-break"
              onClick={handleClick}
              disabled={!session ? !disable.breakBtns : disable.breakBtns}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
