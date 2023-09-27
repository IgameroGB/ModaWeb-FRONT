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

  padding-left: 35px;
  min-width: 140px;
  display: flex;
  align-items: center;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text1 = styled.span``;
const Text2 = styled.span``;
const Text3 = styled.span``;
const Text4 = styled.span``;
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
        <TextGroup>
          <div style={{ display: "flex" }}>
            <span
              style={{
                fontSize: "35px",
                lineHeight: "32px",
                fontFamily: "var(--stylographic-font)",
              }}
            >
              P
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ paddingLeft: "6px" }}>ucci</span>
              <span>di Benisichi</span>
            </div>
          </div>
        </TextGroup>
        <span style={{ width: "100%", textAlign: "center", fontSize: "14px" }}>
          made in Italy
        </span>
      </LogoText>
    </LogoContainer>
  );
};

export default HeaderLogo;
