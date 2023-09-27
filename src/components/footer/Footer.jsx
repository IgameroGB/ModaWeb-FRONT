import styled from "@emotion/styled";

const Footer = () => {
  const FooterContainer = styled.footer`
    width: 100%;
    height: 300px;

    background-color: #d1d1d1;
    background-image: url(../../assets/images/Muro_footer_2.png);
    background-position: 53% -54px;
    background-size: 60%;
  `;

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
  `;

  const ImageContainer = styled.div`
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <FooterContainer>
      <Container>
        <div>Footer</div>
        <ImageContainer>
          <img
            style={{ height: "100%" }}
            // src="../../assets/images/marco escudo 2.png"
            src="https://i.postimg.cc/0Q8ndfCN/Marco-escudo.png"
            alt=""
          />

          <img
            style={{ height: "100%" }}
            // src="../../assets/images/marco escudo 2.png"
            src="https://i.postimg.cc/yYpMJqnN/Marco-escudo-2.png"
            alt=""
          />
        </ImageContainer>
        <div>Footer</div>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
