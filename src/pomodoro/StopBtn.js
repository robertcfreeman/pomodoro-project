import React from 'react'

export default function StopBtn({
  session, 
  setSession, 
  disable,
  btnsInitialState,
  setDisable,
  setIsTimerRunning,
  setFocusDuration,
  setBreakDuration,
}) {

  //resets timer to initial state i.e focus and break duration to default
  const handleClick = () => {
    setDisable(btnsInitialState);
    setFocusDuration(25);
    setBreakDuration(5);
    setIsTimerRunning(false);
    setSession(null);
  }

  return (
    <button
      type="button"
      className="btn btn-secondary"
      data-testid="stop"
      title="Stop the session"
      disabled={!session ? disable.stopBtn : !disable.stopBtn}
      onClick={handleClick}
    >
      <span className="oi oi-media-stop" />
    </button>
  )
}
