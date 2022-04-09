import React from "react";
import { Button } from "./styles";

export default function Buttons(props) {
  const { className, description, icon } = props;
  return (
    <>
      <Button className={className}>
        <span>{description}</span>
        <img src={icon} alt="" />
      </Button>
    </>
  );
}
