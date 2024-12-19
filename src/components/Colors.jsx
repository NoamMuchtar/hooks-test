import { useRef } from "react";

function Colors() {
  let divRef = useRef(null);
  let handleColor = () => {
    divRef.current.style.backgroundColor = "red";
    divRef.current.style.color = "white";
  };
  return (
    <>
      <div ref={divRef} onClick={handleColor}>
        Click here and change the text style...
      </div>
    </>
  );
}

export default Colors;
