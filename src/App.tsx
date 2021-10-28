import React from 'react'
import Header from './Components/Header'
import Pomodorotimer from './Components/pomodoro-timer'

function App(): JSX.Element {
  return (
    <div className="container">
      <Header />
      <Pomodorotimer pomodoroTimer={1500} shortRestTimer={300} longRestTime={900} cycles={4} />
    </div>
  )
}

export default App
