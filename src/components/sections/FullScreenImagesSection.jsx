import styled from "@emotion/styled";
import Image from "../common/Image";

const FullScreenImagesSection = ({ border, images, width }) => {
  const ImagesContainer = styled.div`
    display: flex;
    margin: auto;

    ${width && `width: ${width};`};
  `;

  const result = [];
  images.forEach((image, i) => {
    result.push(<Image key={i} image={image} border={border} />);
  });

  return (
    <section>
      <ImagesContainer>{result}</ImagesContainer>
    </section>
  );
};

export default FullScreenImagesSection;
