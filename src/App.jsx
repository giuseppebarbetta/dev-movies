import { useState } from "react";
import { Background } from "./components/background";
import { DescriptionMovie } from "./components/description-movie";
import { Header } from "./components/header";
import { Movies } from "./components/movies";
import { Video } from "./components/videos";

import { apiData } from "./api/data";

function App() {
  const [video, setVideo] = useState(apiData?.movies[0]);
  const [playVideo, setPlayVideo] = useState(false);

  const { title, description, linkVideo, imageBanner } = video;

  const handleOpenPlayVideo = () => setPlayVideo(true);
  const handleClosePlayVideo = () => setPlayVideo(false);

  const handleVideo = (data) => {
    setVideo(data)
    window.scrollTo({top: 0})
  }

  return (
    <Background imageBanner={imageBanner}>
      <Header />

      <DescriptionMovie
        handleOpenPlayVideo={handleOpenPlayVideo}
        title={title}
        description={description}
      />

      <Movies data={apiData} handleVideo={(data) => handleVideo(data)} />

      <Video
        playVideo={playVideo}
        handleClosePlayVideo={handleClosePlayVideo}
        linkVideo={linkVideo}
      />
    </Background>
  );
}

export default App;
