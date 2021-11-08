import React, { useState } from 'react'
import { ContainerData, ContainerHeader } from '../Styled/Components/header'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import AssessmentIcon from '@mui/icons-material/Assessment'
import SettingsIcon from '@mui/icons-material/Settings'
import MenuIcon from '@mui/icons-material/Menu'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Statistic from './statistic'
import Task from './Task'

interface Props {
  taskName?: string
  Web?: boolean
  Mobile?: boolean
  completedCycles: number
  numberOfPomodoros: number
  fullWorkingTime: number
}

function Header(props: Props) {
  const [showStatics, setShowStatics] = useState(false)
  const [showTask, setShowTask] = useState(false)

  return (
    <>
      {props.Web ? (
        <ContainerHeader>
          <div style={{ display: 'flex', marginBottom: '-2px' }}>
            <FactCheckIcon style={{ fontSize: '40' }} />
            <h1>Pomomuzi</h1>
          </div>
          <ContainerData>
            <button>
              <AssessmentIcon />
              Configurações
            </button>
            <button onClick={() => setShowStatics(true)}>
              <SettingsIcon />
              Estatísticas
            </button>

            <button>
              <AddCircleIcon onClick={() => setShowTask(true)} />
              Tarefa
            </button>
          </ContainerData>
        </ContainerHeader>
      ) : (
        <ContainerHeader>
          <MenuIcon style={{ fontSize: '40' }} />
        </ContainerHeader>
      )}
      {showStatics && (
        <Statistic
          completedCycles={props.completedCycles}
          numberOfPomodoros={props.numberOfPomodoros}
          fullWorkingTime={props.fullWorkingTime}
          setShowStatics={setShowStatics}
        />
      )}

      {showTask && <Task />}
    </>
  )
}

export default Header
