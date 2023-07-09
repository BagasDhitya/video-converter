/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

const VideoConverter: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [convertedUrl, setConvertedUrl] = useState<string>("");

  const convertVideo = async () => {
    console.log(videoUrl)
    try {
      const response = await axios.post('http://192.168.143.196:5000/api/convert', { videoUrl });
      setConvertedUrl(response.data);
    } catch (error) {
      console.error('Failed to convert video:', error);
    }
  };

  console.log("converted : ", convertedUrl)

  return (
    <div>
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Enter Pinterest video URL"
      />
      <button onClick={() => convertVideo()}>Convert</button>

      {convertedUrl && (
        <div>
          <p>Converted video:</p>
          <ReactPlayer url={convertedUrl?.convertedUrl} controls />
        </div>
      )}
    </div>
  );
};

export default VideoConverter;
