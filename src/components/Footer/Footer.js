import React from "react";
import { FooterContainer, FooterIcons, FooterLink } from "./FooterElements";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterIcons>
        <FooterLink
          href="https://www.facebook.com/profile.php?id=100011721724719"
          target="_blank"
          rel="noopener"
        >
          <FacebookIcon />
        </FooterLink>
        <FooterLink
          href="https://pl.pinterest.com/dejwid4091/_saved/"
          target="_blank"
          rel="noopener"
        >
          <PinterestIcon />
        </FooterLink>
        <FooterLink
          href="https://www.instagram.com/dawidspisak/"
          target="_blank"
          rel="noopener"
        >
          <InstagramIcon />
        </FooterLink>
      </FooterIcons>
    </FooterContainer>
  );
};

export default Footer;
