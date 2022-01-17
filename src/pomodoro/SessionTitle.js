import React from 'react';
import {minutesToDuration, secondsToDuration} from "../utils/duration"

export default function SessionTitle({
  session, 
  focusDuration, 
  breakDuration, 
  isTimerRunning,
}) {

  if (!session) return null;

  /*
  renders the formatted time remaining in the current session
  whether "Focusing" or "On Break"
  */
  function getSessionTime (session) {
    let sessionTime = null;
    if (session?.label === "Focusing") {
      sessionTime = minutesToDuration(focusDuration);
    } else if (session?.label ==="On Break") {
      sessionTime = minutesToDuration(breakDuration);
    };

    return sessionTime;
  }
  

  //renders "Paused" when timer is paused
  let pausedContent = null;
  if (!isTimerRunning) {
    pausedContent = <h3>Paused</h3>;
  };

  
  return (
    <div className="row mb-2">
      <div className="col">
        <h2 data-testid="session-title">
          {session?.label} for {getSessionTime(session)} minutes
        </h2>
        <p className="lead" data-testid="session-sub-title">
          {secondsToDuration(session?.timeRemaining)} remaining
        </p>
        {pausedContent}
      </div>
    </div>
  )
}
