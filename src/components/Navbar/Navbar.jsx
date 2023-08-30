import React from "react";
import logo from "../../images/Logo.png";
import { Nav, ImageLogo, InputSpace } from "./NavbarStyled";

export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </InputSpace>
        <ImageLogo src={logo} alt="Logo Breaking News" />
        {/* <Button>Entrar</Button> */}
        <button>Entrar</button>
      </Nav>
    </>
  );
}
