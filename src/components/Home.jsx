import { useEffect, useRef, useState } from "react";

function Home() {
  let [name, setName] = useState("Noam Muchtar");
  let counter = useRef(1);

  useEffect(() => {
    counter.current = counter.current + 1;
  });
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
      <p>app renderd {counter.current} times</p>
    </>
  );
}

export default Home;
