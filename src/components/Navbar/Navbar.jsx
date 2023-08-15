import React from "react";
import logo from "../../images/Logo.png";

import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="input-search-space">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </div>
        <img src={logo} alt="Logo Breaking News" />
        <button>Entrar</button>
      </nav>
    </>
  );
}
