import React from 'react';

import { H1 } from './styles';
import StyledSpan from '../StyledSpan';

export default function PageTitle(props) {
  return (
    <>
      <H1 id={props.id}>
        {props.partOne}
        <StyledSpan text={props.styledTitle} />
        {props.partTwo}
      </H1>
    </>
  )
}
