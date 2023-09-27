import styled from "@emotion/styled";

const Footer = () => {
  const FooterContainer = styled.footer`
    width: 100%;
    height: 300px;

    background-color: #d1d1d1;
    background-image: url("../../assets/images/Muro_footer.png");
    background-image: url("https://i.postimg.cc/vHCsfj5Y/Muro-footer.png");

    background-position-x: center;
  `;
  return (
    <FooterContainer>
      <div>Footer</div>
      <div>Footer</div>
      <div>Footer</div>
    </FooterContainer>
  );
};

export default Footer;
