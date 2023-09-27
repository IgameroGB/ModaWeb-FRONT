import styled from "@emotion/styled";

const Footer = () => {
  const FooterContainer = styled.footer`
    width: 100%;
    /* height: 300px; */

    background-color: #d1d1d1;
    background-image: url(../../assets/images/Muro_footer_2.png);
    background-image: url(https://i.postimg.cc/nLbzjSG6/Muro-footer-2.png);
    background-image: url(https://fixthephoto.com/images/content/green-marble-tile-texture-391613740557.jpg);
    background-position: 53% -54px;
    background-size: 60%;
  `;

  const Container = styled.div`
    padding: 30px 10px 0;

    display: flex;
    justify-content: center;

    height: 100%;
  `;

  const FooterBlock = styled.div`
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    width: 20%;
  `;

  const BlockTitle = styled.span`
    margin: 0 0 7px;
    padding: 0 0 5px;
    width: 100%;
    border-bottom: 3px solid var(--light-font);
  `;

  const List = styled.ul`
    margin: 0;
    padding: 0px 5%;
    padding: 0;
    list-style: none;

    font-size: 15px;
  `;

  const ImageContainer = styled.div`
    width: 20%;
    max-width: 200px;
    /* height: 85%; */
    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: 20px;
  `;

  return (
    <FooterContainer>
      <div className="container">
        <Container>
          <FooterBlock>
            <BlockTitle>Tienda</BlockTitle>
            <List>
              <li>Novedades</li>
              <li>Catálogo</li>
            </List>
          </FooterBlock>
          <FooterBlock>
            <BlockTitle>Sobre nosotros</BlockTitle>
            <List>
              <li>Pucci di Benisichi</li>
              <li>¿Quiénes somos?</li>
            </List>
          </FooterBlock>

          <ImageContainer>
            <img
              style={{ width: "80%" }}
              // src="../../assets/images/marco escudo 2.png"
              src="https://i.postimg.cc/0Q8ndfCN/Marco-escudo.png"
              alt=""
            />

            {/* <img
            style={{ width: "80%" }}
            src="https://i.postimg.cc/yYpMJqnN/Marco-escudo-2.png"
            alt=""
          /> */}
          </ImageContainer>
          <FooterBlock>
            <BlockTitle>Ayuda</BlockTitle>
            <List>
              <li>Politica de ... </li>
              <li>Politica de ... </li>
              <li>Politica de ... </li>
              <li>Contacta con nosotros</li>
            </List>
          </FooterBlock>
          <FooterBlock>
            <BlockTitle>Síguenos</BlockTitle>
            <List>
              <li>Instragram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Pinterest</li>
              <li>Youtube</li>
            </List>
          </FooterBlock>
        </Container>
      </div>
    </FooterContainer>
  );
};

export default Footer;
