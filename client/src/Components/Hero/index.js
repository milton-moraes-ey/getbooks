import React from "react";

export default function Hero(props) {
  return <>
      <img src={props.src} alt={props.alt} className={props.className}/>  
  </>;
}