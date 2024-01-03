import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";

const SubscriptionBox = (videoId) => {
  const [videos, setVideos] = useState([]);
  const { id, snippet } = videos;
  const presentVideo = videos.find((video) => video.id === videoId.id);
  console.log(presentVideo);
  console.log(videoId);
  const getVideos = async () => {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();
    setVideos(data.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="mt-4 ">
      <div>
        <h3 className="text-xl font-semibold">
          {presentVideo?.snippet?.title}
        </h3>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-4">
          {/* profile of youtuber */}
          <div className="flex gap-2 justify-between ">
            <div>
              <img
                width={50}
                className="rounded-[9999px]"
                src="https://yt4.ggpht.com/ytc/AIf8zZTMThXrW361Cl3RlWzZ8oSZSii25ax5XnS2ZbMELX2osQKrdkoVQZceeQ1zX2t3=s64-c-k-c0x00ffffff-no-rj"
                alt="profile image"
              />
            </div>

            <div className="flex flex-col items-start justify-start">
              <div className="font-bold">
                {presentVideo?.snippet?.channelTitle}
              </div>
              <div className="text-sm text-gray-600">898K subscribers </div>
            </div>
          </div>

          {/* subscribe */}
          <div>
            <button className="bg-black text-white px-3 py-2 rounded-3xl text-base  font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          {/* like and dislike */}
          <div className="flex bg-gray-100 rounded-3xl">
            <div>
              <img
                src="like.svg"
                alt="like"
                width={60}
                className=" rounded-xl w-[44px] hover:bg-gray-200 hover:rounded-3xl"
              />
            </div>
            <div>
              <img
                src="like.svg"
                alt="dislike"
                width={60}
                className="rotate-180 w-[44px] hover:bg-gray-200 hover:rounded-3xl"
              />
            </div>
          </div>

          {/* share */}
          <div className="flex gap-0 items-center bg-gray-100 rounded-3xl px-2 hover:bg-gray-200">
            <img
              src="share.svg"
              alt="share"
              width={60}
              className=" w-[36px] "
            />
            <p>Share</p>
          </div>

          {/* download */}
          <div className="bg-gray-100 rounded-3xl px-3 flex justify-center items-center">Download</div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBox;
