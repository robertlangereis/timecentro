import React, { Fragment, useState, useEffect } from 'react'

const Timer = ({ time, timerRunning, switcher, setTimer }) => {
  const [values, setValues] = useState(time / 60)

  const handleInputChange = e => {
    const { value } = e.target
    setValues(value)
    setTimeout(() => {
      setTimer(value * 60)
    }, 1000)
  }

  function sec2time (timeInSeconds) {
    var pad = function (num, size) {
      return ('000' + num).slice(size * -1)
    }

    var time = parseFloat(timeInSeconds)

    var minutes = Math.floor(time / 60) % 60
    var seconds = Math.floor(time - (Math.floor(time / 60) % 60) * 60)

    
    return pad(minutes, 2) + ':' + pad(seconds, 2)
  }

  return (
    <Fragment>
      {time > 0 && (
        <div
          style={
            timerRunning
              ? {
                backgroundColor: 'green',
                color: 'white',
                margin: '1.5em',
                fontSize: '1.5em'
              }
              : {
                backgroundColor: 'red',
                color: 'white',
                margin: '1.5em',
                fontSize: '1.5em'
              }
          }
        >
          {sec2time(time)}
        </div>
      )}

      {timerRunning}
      <br />
      <button
        style={
          timerRunning
            ? {
              backgroundColor: 'green',
              color: 'white',
              margin: '1.5em',
              fontSize: '1.5em'
            }
            : {
              backgroundColor: 'red',
              color: 'white',
              margin: '1.5em',
              fontSize: '1.5em'
            }
        }
        onClick={() => switcher(!timerRunning)}
      >
        ON/OFF
      </button>
      <br />
      <input
        name='setTime'
        placeholder='Set Time'
        onChange={handleInputChange}
        value={values}
        style={{ margin: '1em', textAlign: 'center', fontSize: '1.5em' }}
      />
    </Fragment>
  )
}

export default Timer
