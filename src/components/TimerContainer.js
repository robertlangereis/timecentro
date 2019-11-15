import React, { Fragment, useState, useEffect, useRef } from 'react'
import Timer from './Timer'

const TimerContainer = () => {
  const [time, setTimer] = useState(1500)
  const [timerRunning, timerSwitch] = useState(false)
  
  useInterval(() => {
    if(timerRunning) setTimer(prevTime => prevTime - 1);
  }, 1000);

  function useInterval(callback, timerRunning) {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (timerRunning) {
        let id = setInterval(tick, 1000);
        return () => clearInterval(id);
      }
    }, [timerRunning]);
  }

  return (
    <Fragment>
      <Timer time={time} timerRunning={timerRunning} switcher={timerSwitch} setTimer={setTimer}/>
    </Fragment>
  )
}

export default TimerContainer