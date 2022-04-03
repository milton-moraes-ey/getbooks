import React from "react";
import { Button } from "./styles";

export default function Buttons(props) {
  return (
    <>
      <Button>
        <span>{props.description}</span>
        <img src={props.icon} alt="" />
      </Button>
    </>
  );
}
