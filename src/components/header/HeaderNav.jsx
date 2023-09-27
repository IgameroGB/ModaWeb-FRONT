import styled from "@emotion/styled";

const HeaderNavContainer = styled.nav`
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

const HeaderNav = () => {
  return (
    <HeaderNavContainer>
      <List>
        <ListElem>Home</ListElem>
        <ListElem>Nuestra Tienda</ListElem>
        <ListElem>Colecciones</ListElem>
        <ListElem>Desfiles</ListElem>
      </List>
    </HeaderNavContainer>
  );
};

export default HeaderNav;
