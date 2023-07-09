import React, { useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

const VideoConverter: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>();
  const [convertedUrl, setConvertedUrl] = useState<string>();

  const convertVideo = async () => {
    console.log(videoUrl);
    try {
      const response = await axios.post('http://192.168.143.196:5000/api/convert', { videoUrl })
      setConvertedUrl(response?.data?.convertedUrl)
    } catch (error) {
      console.error('Failed to convert video:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value);
  };

  const handleConvertClick = () => {
    convertVideo()
      .catch((error) => console.log(error))
  };

  return (
    <div>
      <input
        type="text"
        value={videoUrl}
        onChange={handleInputChange}
        placeholder="Enter Youtube video URL"
      />
      <button onClick={handleConvertClick}>Convert</button>
      {convertedUrl && (
        <div>
          <p>Converted video:</p>
          <ReactPlayer url={convertedUrl} controls />
        </div>
      )}
    </div>
  );
};

export default VideoConverter;
