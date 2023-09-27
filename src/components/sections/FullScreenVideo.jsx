import styled from "@emotion/styled";
import React from "react";

function FullScreenVideo({ videoUrl, title, border, borderColor, width }) {
  const VideoSection = styled.section`
    border-width: ${border};
    border-color: ${borderColor.isVar
      ? borderColor.colorCode
      : borderColor.colorCode};
    border-style: solid;

    margin: auto;

    ${width && `width: ${width};`};
  `;
  return (
    <VideoSection>
      <div className="iframe-container">
        <iframe
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </VideoSection>
  );
}

export default FullScreenVideo;
