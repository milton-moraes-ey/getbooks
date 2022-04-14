import React from "react";
import { ScrollToTop } from "./styles";
import Hero from "../Hero/index";

import ArrowIcon from "../../assets/icons/arrow-up-icon.svg";

export default function ScrollToTopButton(props) {
  const { scrollToTop } = props;
  return (
    <ScrollToTop onClick={scrollToTop}> 
      <Hero src={ArrowIcon} className="scroll-to-top" />
    </ScrollToTop>
  );
}
