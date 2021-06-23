import React from "react";
import { FooterContainer, FooterIcons } from "./FooterElements";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterIcons>
        <FacebookIcon />
        <PinterestIcon />
        <InstagramIcon />
      </FooterIcons>
    </FooterContainer>
  );
};

export default Footer;
