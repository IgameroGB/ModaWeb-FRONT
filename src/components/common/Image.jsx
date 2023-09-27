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

    display: flex;
    flex-direction: column-reverse;
  `;

  const ImageTextContainer = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0;
    padding: 5px 0;
  `;

  const ImageText = styled.span`
    padding: 5px 25px;
    color: var(--gold-color);
  `;

  return (
    <ImageContainer>
      <ImageTextContainer>
        {image.text != "" && <ImageText>{image.text}</ImageText>}
      </ImageTextContainer>
    </ImageContainer>
  );
};

export default Image;
