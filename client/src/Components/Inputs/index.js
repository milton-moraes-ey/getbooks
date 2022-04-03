import React from "react";
import { Input } from "./styles";

export default function Inputs(props) {
  return (
    <>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        className={props.className}
        id={props.id}
      />
    </>
  );
}
