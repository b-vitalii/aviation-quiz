import { useRef } from "react";

export default function Start({ setUserName }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUserName(inputRef.current.value);
  };
  return (
    <div className="start">
      <h1 className="gemeTitle">Aviation Quiz</h1>
      <input
        placeholder="Enter your name"
        className="startInput"
        ref={inputRef}
      />
      <button className="startBtn" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
