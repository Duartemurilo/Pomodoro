import React from 'react'

interface Props {
  text: any
  onClick?: () => void
  className?: string
}

function Button(props: Props): JSX.Element {
  return (
    <button className={props.className} onClick={props.onClick}>
      <p>{props.text}</p>
    </button>
  )
}

export default Button
