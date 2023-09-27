import { useState } from "react";

import styled from "@emotion/styled";
import "bootstrap-icons/font/bootstrap-icons.css";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderRightMenu from "./HeaderRightMenu";

const HeaderMain = () => {
  const Header = styled.header`
    background-image: url(./assets/images/header-texture.jpg);
    background-image: url("https://i.postimg.cc/sgXbSky1/header-texture.jpg");
    background-position: -2479px -1514px;
    background-size: 2000px;

    z-index: 9999;

    position: fixed;
    width: 100%;

    border-bottom: 3px solid var(--gold-color);
  `;
  const HeaderContainer = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--gold-font);
  `;

  const HeaderStaticBack = styled.div`
    width: 100%;
    height: 100px;
  `;

  return (
    <>
      <Header>
        <div className="container">
          <HeaderContainer>
            <HeaderLogo />

            <HeaderNav />

            <HeaderRightMenu />
          </HeaderContainer>
        </div>
      </Header>
      <HeaderStaticBack id="header-static-back"></HeaderStaticBack>
    </>
  );
};

export default HeaderMain;
