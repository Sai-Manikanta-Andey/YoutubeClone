import React, { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchQuerySuggestions = async () => {
    const response = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const data = await response.json();
    console.log(data[1]);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      console.log(searchQuery);
      getSearchQuerySuggestions();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="flex items-center justify-between p-4 ">
      <div className="flex items-center gap-4">
        <LuMenu
          fontSize={25}
          className="cursor-pointer "
          onClick={toggleMenuHandler}
        />
        <img src="logo.png" alt="logo" width={120} />
      </div>
      <div className="flex items-center justify-between gap-4 p-2 border-2 border-gray-400 rounded-3xl lg:w-4/12">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
          placeholder="Search"
          className="px-2 outline-none lg:w-[90%]"
        />
        <button>
          <CiSearch fontSize={20} />
        </button>
      </div>
      <div className="flex items-center">
        <CgProfile fontSize={25} />
      </div>
    </div>
  );
};

export default Head;
