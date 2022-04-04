import React from 'react'
import { Span } from './styles'

export default function StyledSpan(props) {
  return (
    <>
      <Span>
        {props.text}
      </Span>
    </>
  )
}
