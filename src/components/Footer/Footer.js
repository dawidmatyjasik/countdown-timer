import React from "react";
import Icon from "./Icon";
import { FooterContainer, FooterIcons } from "./FooterElements";
import Facebook from "../../images/icon-facebook.svg";
import Pinterest from "../../images/icon-pinterest.svg";
import Instagram from "../../images/icon-instagram.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterIcons>
        <Icon icon={Facebook} />
        <Icon icon={Pinterest} />
        <Icon icon={Instagram} />
      </FooterIcons>
    </FooterContainer>
  );
};

export default Footer;
