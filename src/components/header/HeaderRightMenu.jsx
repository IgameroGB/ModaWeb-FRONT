import styled from "@emotion/styled";

import { isHover } from "../../js/utilities";

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

const HeaderRightMenu = () => {
  return (
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
  );
};

export default HeaderRightMenu;
