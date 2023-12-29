import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { YOUTUBE_LIVE_CHAT_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./ChatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveMsg = useSelector((store) => store.chat.messages);

  useEffect(() => {
    let timer = setInterval(() => {
      
      dispatch(addMessage({ name: "SMK", message: "Jai Shri Ram" }));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border rounded-xl md:w-[400px]">
      <div>
        <h3 className="p-4 font-semibold border-b">Live chat</h3>
      </div>

      <div className="p-4 overflow-y-scroll h-96">
        {liveMsg.map((msg) => (
          <ChatMessage name={msg.name} message={msg.message} key={Date.now()} />
        ))}
        <ChatMessage name={"sai"} message={"Jai Shri Ram"} />
      </div>
      <div className="flex items-center justify-center gap-2 p-3 border-t">
        <input
          type="text"
          className="bg-gray-100 w-[320px] p-2 rounded-2xl "
          placeholder="Chat..."
        />
        <div>
          <button className="p-2 bg-gray-100 rounded-2xl">▶️</button>
        </div>
      </div>
      <div className="p-4 border-t">
        <button className="w-full mx-auto font-semibold">Show chat</button>
      </div>
    </div>
  );
};

export default LiveChat;
