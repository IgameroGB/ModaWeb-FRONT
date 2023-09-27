import { useState } from "react";

import styled from "@emotion/styled";
import "bootstrap-icons/font/bootstrap-icons.css";
import { isHover } from "../../js/utilities";

const HeaderMain = () => {
  const Header = styled.header`
    background-image: url(./assets/images/textura-pared-vieja-cemento-fondo-rojo-negro-diseno-color-oscuro-abstracto-son-claros-fondo-degradado-blanco.jpg);
    background-position: -2479px -1514px;
    background-size: 2000px;

    z-index: 9999;

    position: fixed;
    width: 100%;
  `;
  const HeaderContainer = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--gold-font);
  `;

  const HeaderLogo = styled.div``;

  const HeaderNav = styled.nav`
    width: 75%;
    display: flex;
    justify-content: flex-end;
    padding: 0 30px;
  `;

  const List = styled.ul`
    list-style: none;
    display: flex;

    padding: 0;
    margin: 0;
  `;

  const ListElem = styled.li`
    padding: 5px 10px;
  `;

  const RightMenu = styled.div`
    width: 10%;
    min-width: 100px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px 0;
  `;

  const IcoGroup = styled.div`
    position: relative;
    display: flex;
    font-size: 18px !important;

    transition: 200ms ease;
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
            <HeaderLogo>
              <img
                src="https://www.zimmermann.com/static/version1692587267/frontend/tryzens/zimmermann/en_IE/images/icons/logo.svg"
                alt=""
              />
            </HeaderLogo>
            <HeaderNav>
              <List>
                <ListElem>Home</ListElem>
                <ListElem>Nuestra Tienda</ListElem>
                <ListElem>Colecciones</ListElem>
                <ListElem>Desfiles</ListElem>
              </List>
            </HeaderNav>
            <RightMenu
              onMouseEnter={() => isHover(true)}
              onMouseLeave={() => isHover(false)}
            >
              <IcoGroup className="header-ico-group ico-1">
                <i className="bi bi-person"></i>
                <div className="text">Perfil</div>
              </IcoGroup>
              <IcoGroup className="header-ico-group ico-2">
                <i className="bi bi-telephone"></i>
                <div className="text">Llámanos</div>
              </IcoGroup>
              <IcoGroup className="header-ico-group ico-3">
                <i className="bi bi-envelope"></i>
                <div className="text">Email</div>
              </IcoGroup>
            </RightMenu>
          </HeaderContainer>
        </div>
      </Header>
      <HeaderStaticBack id="header-static-back"></HeaderStaticBack>
    </>
  );
};

export default HeaderMain;
