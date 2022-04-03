import React from 'react';

import { H1 } from './styles';

export default function PageTitle(props) {
  return (
    <>
      <H1 id={props.id}>
        {props.partOne}
        <span>
          {props.styledTitle}
        </span>
        {props.partTwo}
      </H1>
    </>
  )
}
