import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const arr = [
    "All",
    "Live",
    "Pawan Kalyan",
    "Gaming",
    "Cricket",
    // "Rohit ",
    // "Valorant",
    // "React",
    // "ChatGPT",
    // "Gemini",
    // "Akshay Saini","Acer","Freefire","Messi"
  ];
  return (
    <div className="flex gap-4 px-3 ">
      {
        arr.map(btn => <Button name={btn} key={btn} />)
      }
    </div>
  );
};

export default ButtonList;
