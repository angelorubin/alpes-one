import React from "react";
// pages
import * as H from "pages/home/header/styled";
// icons
import { FaHome, FaEnvelope } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <H.Container>
      <div>
        <div className="left-container">
          <div>
            <IconContext.Provider value={{ className: "small" }}>
              <a href="/">
                <FaHome />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "medium" }}>
              <a href="/">
                <FaHome />
              </a>
            </IconContext.Provider>
            <a className="link" href="/">
              Ir para o Portal Banzai
            </a>
          </div>
        </div>
        <div className="right-container">
          <div>
            <IconContext.Provider value={{ className: "small" }}>
              <MdPlace />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "medium" }}>
              <MdPlace />
            </IconContext.Provider>
            <a className="link" href="/">
              Encontre uma concessionária
            </a>
          </div>
          <div>
            <IconContext.Provider value={{ className: "small" }}>
              <FaEnvelope />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "medium" }}>
              <FaEnvelope />
            </IconContext.Provider>
            <a className="link" href="/">
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </H.Container>
  );
};

export default Header;
