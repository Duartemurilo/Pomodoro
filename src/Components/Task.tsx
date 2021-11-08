import React from 'react'

import { useForm } from '../hooks/UseForm'
import { ContainerTask, DivTitleTask, InputTask, TaskContainer } from '../Styled/Components/taskStyle'

function Task() {
  const { form, onChange } = useForm({ task: '' })

  const handleInput = (event: any) => {
    const { value, name } = event.target
    onChange(value, name)
  }

  const handleSubmission = (event: any) => {
    event.preventDefault()
  }

  return (
    <ContainerTask>
      <DivTitleTask>
        <div></div>
        <p>Oque voce vai fazer?</p>
        <div></div>
      </DivTitleTask>
      <TaskContainer>
        <form>
          <InputTask placeholder="Trabalhando..." value={form.task} name={'task'} onChange={handleInput} />
        </form>
      </TaskContainer>
      <button onClick={handleSubmission}>Salvar</button>
    </ContainerTask>
  )
}

export default Task
