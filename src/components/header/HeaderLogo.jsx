import styled from "@emotion/styled";

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.div``;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderLogo = () => {
  return (
    <LogoContainer>
      {/* <LogoImage>
        <img
          src="https://www.zimmermann.com/static/version1692587267/frontend/tryzens/zimmermann/en_IE/images/icons/logo.svg"
          alt=""
        />
      </LogoImage> */}
      <LogoText>
        <span>
          Pucci <br /> di Benisichi
        </span>
        <span>made in Italy</span>
      </LogoText>
    </LogoContainer>
  );
};

export default HeaderLogo;
