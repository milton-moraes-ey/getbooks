import React from "react";

import { H1 } from "./styles";
import StyledSpan from "../StyledSpan";

export default function PageTitle(props) {
  const { id, partOne, styledTitle, partTwo } = props;

  return (
    <>
      <H1 id={id}>
        {partOne}
        <StyledSpan text={styledTitle} />
        {partTwo}
      </H1>
    </>
  );
}
