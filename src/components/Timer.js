import React, {Fragment} from 'react'

const Timer = ({time, timerRunning, switcher}) => {
    return (
        <Fragment>
            {time}
            {console.log(time)}
            {timerRunning}
            {console.log(timerRunning)}
            <button onClick={()=>switcher(!timerRunning)}>SWITCH</button>
        </Fragment>
    )
}

export default Timer
