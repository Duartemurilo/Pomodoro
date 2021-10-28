import React from 'react'
import { ContainerHeader } from '../Styled/Components/header'

interface Props {
  taskName?: string
}

function Header(props: Props) {
  return <ContainerHeader></ContainerHeader>
}

export default Header
