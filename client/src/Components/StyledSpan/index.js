import React from "react";
import { Span } from "./styles";

export default function StyledSpan(props) {
  const { text } = props;

  return (
    <>
      <Span>{text}</Span>
    </>
  );
}
