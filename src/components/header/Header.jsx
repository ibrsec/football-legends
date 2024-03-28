import React from "react";

import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="text-center mt-5">
      <Image src={logo} width="200" /> 
      <h1 className="text-warning bg-success rounded-5 opacity-75 mt-3 p-2 px-5  text-nowrap">FOOTBALL LEGENDS</h1>
    </Container>
  );
};

export default Header;
