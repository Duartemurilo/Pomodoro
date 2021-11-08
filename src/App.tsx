import React, { useState } from 'react'
import Header from './Components/Header'
import Pomodorotimer from './Components/pomodoro-timer'
import useMediaQuery from '@mui/material/useMediaQuery'

function App(): any {
  const matches = useMediaQuery('(min-width:450px)')
  const [completedCycles, setCompletedCycles] = useState(0)
  const [fullWorkingTime, setFullWorkingTime] = useState(0)
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0)

  return (
    <div className="container">
      {matches ? (
        <>
          <Header
            Web={true}
            completedCycles={completedCycles}
            numberOfPomodoros={numberOfPomodoros}
            fullWorkingTime={fullWorkingTime}
          />
          <Pomodorotimer
            pomodoroTimer={1500}
            shortRestTimer={300}
            longRestTime={900}
            cycles={4}
            setFullWorkingTime={setFullWorkingTime}
            setCompletedCycles={setCompletedCycles}
            setNumberOfPomodoros={setNumberOfPomodoros}
            completedCycles={completedCycles}
            numberOfPomodoros={numberOfPomodoros}
            fullWorkingTime={fullWorkingTime}
          />
        </>
      ) : (
        <>
          <Header
            Mobile={true}
            completedCycles={completedCycles}
            numberOfPomodoros={numberOfPomodoros}
            fullWorkingTime={fullWorkingTime}
          />
          <Pomodorotimer
            pomodoroTimer={1500}
            shortRestTimer={300}
            longRestTime={900}
            cycles={4}
            setFullWorkingTime={setFullWorkingTime}
            setCompletedCycles={setCompletedCycles}
            setNumberOfPomodoros={setNumberOfPomodoros}
            completedCycles={completedCycles}
            numberOfPomodoros={numberOfPomodoros}
            fullWorkingTime={fullWorkingTime}
          />
        </>
      )}
    </div>
  )
}

export default App
