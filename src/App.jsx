import { useState, useEffect } from "react";
import axios from "axios";
import { Background } from "./components/background";
import { DescriptionMovie } from "./components/description-movie";
import { Header } from "./components/header";
import { Movies } from "./components/movies";
import { Video } from "./components/videos";

import { apiData } from "./api/data";

function App() {
  const [video, setVideo] = useState(apiData.movies[0]);
  const [moviesData, setMoviesData] = useState([])
  const [playVideo, setPlayVideo] = useState(false);
  const baseUrl = "http://localhost:3003"

  const { title, description, linkVideo, imageBanner } = video;

  const apiDataMovies = moviesData?.movies?.length > 0 ? moviesData : apiData

  useEffect(() => {
    const getMoviesAndCategories = async () => {
      const { data } = await axios.get(`${baseUrl}/movies-categories`);
      setMoviesData(data)
    };
    getMoviesAndCategories();
  }, []);

  const handleOpenPlayVideo = () => setPlayVideo(true);
  const handleClosePlayVideo = () => setPlayVideo(false);

  const handleVideo = (data) => {
    setVideo(data);
    window.scrollTo({ top: 0 });
  };

  return (
    <Background imageBanner={imageBanner}>
      <Header />

      <DescriptionMovie
        handleOpenPlayVideo={handleOpenPlayVideo}
        title={title}
        description={description}
      />

      <Movies data={apiDataMovies} handleVideo={(data) => handleVideo(data)} />

      <Video
        playVideo={playVideo}
        handleClosePlayVideo={handleClosePlayVideo}
        linkVideo={linkVideo}
      />
    </Background>
  );
}

export default App;
