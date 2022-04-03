import React from "react";
import { LabelComponent } from "./style";

export default function Label(props) {
  return (
    <LabelComponent
      className={props.className}
      htmlFor={props.htmlFor}
      name={props.name}
      id={props.id}
    >
      {props.value}
    </LabelComponent>
  );
}
