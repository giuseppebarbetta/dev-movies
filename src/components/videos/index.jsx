import { Player, Youtube } from "@vime/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import * as C from "./style";

// eslint-disable-next-line react/prop-types
export const Video = ({ linkVideo, playVideo, handleClosePlayVideo }) => {
  return playVideo ? (
    <C.Container>
      <C.Button onClick={handleClosePlayVideo}>
        <AiOutlineArrowLeft />
        Back
      </C.Button>
      <Player controls>
        <Youtube videoId={linkVideo} />
      </Player>
    </C.Container>
  ) : null;
};
