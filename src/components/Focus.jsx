import { useRef } from "react";

function Focus() {
  let inputRef = useRef(null);
  let handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
}

export default Focus;
