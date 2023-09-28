import styled from "@emotion/styled";

const BlurElem = styled.div``;

function BackBlur({ blurAnimation }) {
  return (
    <BlurElem className={`blur ${blurAnimation ? "animate" : ""}`}></BlurElem>
  );
}

export default BackBlur;
