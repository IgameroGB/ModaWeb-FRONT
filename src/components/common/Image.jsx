import styled from "@emotion/styled";

const Image = ({ border, image }) => {
  const ImageContainer = styled.div`
    width: ${image.size * 100}%;
    background-color: red;
    border-width: ${border.borderWidth}px;
    border-style: solid;
    border-color: ${border.borderColor.isVar
      ? border.borderColor.colorCode
      : border.borderColor.colorCode};

    height: ${image.height}px;
    background-image: url(${image.src});
    background-size: cover;
  `;

  return (
    <ImageContainer>
      <div>Image text</div>
    </ImageContainer>
  );
};

export default Image;
