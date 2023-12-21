import React from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector(state => state.app.isMenuOpen)
  return ( isMenuOpen?
    (<div className="w-36  ">
      <div className="py-4">
        <ul className="flex flex-col gap-4">
          <li className="flex gap-4 items-center">
            <span>
              <img src="./home.svg" alt="home" />
            </span>
            Home
          </li>
          <li className="flex gap-4">
            <span>
              <img src="./shorts.svg" alt="shorts" />
            </span>
            Shorts
          </li>
          <li className="flex gap-4">
            <span>
              <img src="./subscriptions.svg" alt="subscription" />
            </span>
            Subscriptions
          </li>
        </ul>
      </div>
      <hr />

      {/* YOU */}

      <div className=" py-4">
        <h3 className="font-semibold text-xl">You</h3>
        <ul className="flex flex-col gap-4 mt-2">
          <li className="flex gap-4 items-center">
            <span>
              {" "}
              <CgProfile fontSize={23} opacity={0.8} />{" "}
            </span>
            Your channel
          </li>
          <li className="flex gap-4">
            <span>
              <img src="./history.svg" alt="history" />
            </span>
            History
          </li>
          <li className="flex gap-4">
            <span>
              <img src="./you.svg" alt="you" />
            </span>
            Your videos
          </li>
          <li className="flex gap-4">
            <span>
              <img src="./watchlater.svg" alt="watchlater" />
            </span>
            Watch later
          </li>
        </ul>
      </div>
      <hr />
      <div className="py-4">
        <ul className="flex flex-col gap-4 mt-2">
          <li className="flex gap-4">
            <span>
              <img src="./music.svg" alt="music" />
            </span>
            Music
          </li>
          <li className="flex gap-4">
            <span>
              <img src="./sports.svg" alt="sports" />
            </span>
            Sports
          </li>
          <li className="flex gap-4">
            <span>
              <img src="./gaming.svg" alt="gaming" />
            </span>
            Gaming
          </li>
          
        </ul>
      </div>
    </div>):null
  );
};

export default SideBar;
