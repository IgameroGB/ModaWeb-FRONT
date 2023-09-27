import styled from "@emotion/styled";
import FullScreenVideo from "../components/sections/FullScreenVideo";
import FullScreenImagesSection from "../components/sections/FullScreenImagesSection";

function Index() {
  const Main = styled.div`
    /* background-image: url(./assets/images/textura-pared-vieja-cemento-fondo-rojo-negro-diseno-color-oscuro-abstracto-son-claros-fondo-degradado-blanco.jpg); */
    background-color: var(--light-red-color);
  `;

  const MainContainer = styled.div`
    background-image: url("https://img.freepik.com/vector-gratis/textura-marmol-gris_1100-155.jpg");
    /* width: 90%; */
    margin: auto;
  `;

  const borderWidth = 2;
  const borderColor = { colorCode: "var(--gold-color)", isVar: true };
  const elemScreenWidth = "90%";

  return (
    <Main>
      <MainContainer>
        <FullScreenVideo
          videoUrl="https://www.youtube.com/embed/ypD6nlc2PCg?si=NXoJJytuobm72Ugx"
          border={`0 0 ${borderWidth}px 0 `}
          borderColor={borderColor}
          title="video 1"
          width /* Tamaño de la sección */
        />
        <FullScreenImagesSection
          width={elemScreenWidth} /* Tamaño de la sección */
          border={{ borderWidth, borderColor }}
          images={[
            {
              size: 1 / 3,
              src: "https://i0.wp.com/www.modaencalle.com/wp-content/uploads/2015/07/Valentino-roma-6.jpg?ssl=1",
              height: 600,
              text: "Bestido Negro"
            },
            {
              size: 1 / 3,
              src: "https://i0.wp.com/www.modaencalle.com/wp-content/uploads/2015/07/Valentino-roma-7.jpg?ssl=1",
              height: 600,
              text: "Bestido Verde"
            },
            {
              size: 1 / 3,
              src: "https://i0.wp.com/www.modaencalle.com/wp-content/uploads/2015/07/Valentino-roma-8.jpg?ssl=1",
              height: 600,
              text: "Bestido Rojo"
            },
          ]}
        />

        <FullScreenImagesSection
          width={elemScreenWidth} /* Tamaño de la sección */
          border={{ borderWidth, borderColor }}
          images={[
            {
              size: 1 / 4,
              src: "https://i0.wp.com/www.modaencalle.com/wp-content/uploads/2015/07/Valentino-roma-6.jpg?ssl=1",
              height: 600,
              text: "Esto es texto genérico"
            },
            {
              size: 2 / 4,
              src: "https://i0.wp.com/www.modaencalle.com/wp-content/uploads/2015/07/Valentino-roma-7.jpg?ssl=1",
              height: 600,
              text: "Esto es una imagen"
            },
            {
              size: 1 / 4,
              src: "https://i0.wp.com/www.modaencalle.com/wp-content/uploads/2015/07/Valentino-roma-6.jpg?ssl=1",
              height: 600,
              text: "Esto es una imagen"
            },
          ]}
        />

        <FullScreenImagesSection
          width /* Tamaño de la sección */
          border={{ borderWidth, borderColor }}
          images={[
            {
              size: 1 / 3,
              src: "https://i0.wp.com/www.modaencalle.com/wp-content/uploads/2015/07/Valentino-roma-6.jpg?ssl=1",
              height: 600,
              text: "Esto es una imagen"
            },
            {
              size: 1 / 3,
              src: "https://i0.wp.com/www.modaencalle.com/wp-content/uploads/2015/07/Valentino-roma-7.jpg?ssl=1",
              height: 600,
              text: "Esto es una imagen"
            },
            {
              size: 1 / 3,
              src: "https://i0.wp.com/www.modaencalle.com/wp-content/uploads/2015/07/Valentino-roma-7.jpg?ssl=1",
              height: 600,
              text: "Esto es una imagen"
            },
          ]}
        />
      </MainContainer>
    </Main>
  );
}

export default Index;
