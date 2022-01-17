import React from 'react';

export default function SessionProgressBar({session, focusDuration, breakDuration}) {
  
  if (!session) return null;

  //returns the current session's duration in seconds
  function getSessionTime (session) {
    let sessionTime = null;
    if (session?.label === "Focusing") {
      sessionTime = focusDuration;
    } else if (session?.label ==="On Break") {
      sessionTime = breakDuration;
    };

    return sessionTime * 60;
  };

  //returns the percentage of time remaining for the progress' bar style width
  const getTimeRemainingPercentage = (session ) =>{
    const percentage = (getSessionTime(session) - session.timeRemaining) / getSessionTime(session) * 100;
    return `${percentage}%`;
  } 

  //returns percentage of time remaining for aria-valuenow attribute
  const getTimeRemaining = (session ) =>{
    const percentage = (getSessionTime(session) - session.timeRemaining) / getSessionTime(session) * 100;
    return `${percentage}`;
  } 
  
  
  return (
    <div className="row mb-2">
      <div className="col">
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={getTimeRemaining(session)} 
            style={{ width: getTimeRemainingPercentage(session) }} 
          />
        </div>
      </div>
    </div>
  )
}
