import styled from "@emotion/styled";

function BackBlur() {
  const BlurElem = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    /* background-color: #ffffff66; */
    /* filter: blur(10px); */
    backdrop-filter: blur(20px);
    opacity: 0;
    transition: opacity 3s ease-in-out;
  `;
  return <BlurElem />;
}

export default BackBlur;
