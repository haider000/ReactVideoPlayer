// Libraries
import { useEffect, useState } from "react";

// Components
import { VideoPlayer } from "../components/VideoPlayer";
import { VideoQueue } from "../components/VideoQueue";
import AddYoutubeUrl from "../components/AddYoutubeUrl";

export const Home = ({ videoQueue }) => {
  // State for current selected Video in queue
  const [selectedVideo, setSelectedVideo] = useState(-1);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (selectedVideo !== -1 && !youtubeUrl)
      setUrl(`${videoQueue[selectedVideo].video_files[0].link}`);

    if (selectedVideo === -1 && youtubeUrl) setUrl(youtubeUrl);

    if (selectedVideo === -1 && !youtubeUrl) setUrl("");
  }, [selectedVideo, youtubeUrl, videoQueue]);

  return (
    <main className="d-flex-col m-5">
      <AddYoutubeUrl
        youtubeUrl={youtubeUrl}
        setYoutubeUrl={setYoutubeUrl}
        setSelectedVideo={setSelectedVideo}
      />
      <VideoPlayer
        url={url}
        title={
          !youtubeUrl && selectedVideo === -1
            ? "No Video Selected"
            : selectedVideo === -1 && youtubeUrl
            ? ""
            : `${selectedVideo + 1}. ${videoQueue[selectedVideo].text}-${
                videoQueue[selectedVideo].id
              }`
        }
      />
      <VideoQueue
        videoQueue={videoQueue}
        setSelectedVideo={setSelectedVideo}
        selectedVideo={selectedVideo}
        setYoutubeUrl={setYoutubeUrl}
      />
    </main>
  );
};
