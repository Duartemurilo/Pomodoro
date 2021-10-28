import React, { useCallback, useEffect, useState } from 'react'
import { useInterval } from '../hooks/use-interval'

import { BodyPomodoroTimer, DivButtons } from '../Styled/Components/pomodor-timer-styles'
import Button from './button'
import Timer from './Timer'

interface Props {
  pomodoroTimer: number
  shortRestTimer: number
  longRestTime: number
  cycles: number
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellStart = require('../sounds/bell-start.mp3')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellFinish = require('../sounds/bell-finish.mp3')

const audioStartWorking = new Audio(bellStart)
const audioStopWorking = new Audio(bellFinish)

function Pomodorotimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTimer)
  const [timeCounting, setTimeCounting] = useState(false)
  const [working, setWorking] = useState(false)
  const [resting, setResting] = useState(false)
  const [cycles, setCycles] = useState(new Array(props.cycles - 1).fill(true))

  useInterval(
    () => {
      setMainTime(mainTime - 1)
    },
    timeCounting ? 1000 : null
  )

  const configWork = () => {
    setTimeCounting(true)
    setWorking(true)
    setResting(false)
    setMainTime(props.pomodoroTimer)
    audioStartWorking.play()
  }

  const stopWork = () => {
    setTimeCounting(!timeCounting)
    setWorking(false)
  }

  const configRest = useCallback(
    (Long: boolean) => {
      setTimeCounting(true)
      setWorking(false)
      setResting(true)

      if (Long) {
        setMainTime(props.longRestTime)
      } else {
        setMainTime(props.shortRestTimer)
      }
      audioStopWorking.play()
    },
    [props.longRestTime, props.shortRestTimer]
  )

  useEffect(() => {
    if (working) document.body.classList.add('working')
    if (resting) document.body.classList.remove('working')

    if (mainTime > 0) return

    if (working && cycles.length > 0) {
      configRest(false)
      cycles.pop()
    } else if (working && cycles.length <= 0) {
      configRest(true)
      setCycles(new Array(props.cycles - 1).fill(true))
    }
  }, [working, resting, mainTime, configRest, cycles, props.cycles])

  return (
    <BodyPomodoroTimer>
      <h1>Você esta Trabalhando</h1>
      <Timer mainTime={mainTime} />

      <DivButtons>
        <Button text={'Começar'} onClick={() => configWork()} />
        <Button
          className={!working && !resting ? 'hidden' : ''}
          text={timeCounting ? 'Pausar' : 'play'}
          onClick={() => stopWork()}
        />
        <Button text={'Descansar'} onClick={() => configRest(false)} />
      </DivButtons>
    </BodyPomodoroTimer>
  )
}

export default Pomodorotimer
