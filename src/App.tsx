import React, { useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Navbar from './components/Navbar';

const VideoConverter: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>();
  const [convertedUrl, setConvertedUrl] = useState<string>();

  const convertVideo = async () => {
    console.log(videoUrl);
    try {
      const response = await axios.post('http://192.168.143.196:5000/api/convert', { videoUrl });
      setConvertedUrl(response?.data?.convertedUrl);
    } catch (error) {
      console.error('Failed to convert video:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value);
  };

  const handleConvertClick = () => {
    convertVideo().catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen bg-white">
      <Navbar />
      <div className='mt-20'>
        <p className='text-red-700 text-center font-bold text-xl'>Your Ultimate Conversion App {<br />} for Easy Downloads!</p>
      </div>
      <div className="my-auto flex flex-col gap-y-5">
        <input
          className="p-2 mb-4 rounded-lg bg-white text-black shadow w-80"
          type="text"
          value={videoUrl}
          onChange={handleInputChange}
          placeholder="Enter Youtube video URL"
        />
        <button
          className="px-4 py-2 mb-4 text-white bg-red-700 rounded-lg"
          onClick={handleConvertClick}
        >
          Convert
        </button>
      </div>
      {convertedUrl && (
        <div>
          <p className="text-white">Converted video:</p>
          <ReactPlayer url={convertedUrl} controls />
        </div>
      )}
    </div>

  );
};

export default VideoConverter;
