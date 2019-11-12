import React, { Fragment, useState, useEffect, useRef } from 'react'
import Timer from './Timer'

const TimerContainer = () => {
  const [time, setTimer] = useState(1500)
  const [timerRunning, timerSwitch] = useState(false)
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  useInterval(() => {
    if(timerRunning) setTimer(prevTime => prevTime - 1);
  }, 1000);

  function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}

var finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);



  return (
    <Fragment>
      <Timer time={finalTime} timerRunning={timerRunning} switcher={timerSwitch} />
    </Fragment>
  )
}

function useInterval(callback, timeRunning) {
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
      if (timeRunning) {
        let id = setInterval(tick, timeRunning);
        return () => clearInterval(id);
      }
    }, [timeRunning]);
  }

export default TimerContainer
