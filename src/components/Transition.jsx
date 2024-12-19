import { useEffect, useState, useTransition } from "react";

function Transition() {
  const [isPending, startTransition] = useTransition();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((photos) => startTransition(() => setPhotos(photos)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {isPending && <p>Loading...</p>}
      {photos.map((photo) => (
        <img key={photo.id} src={photo.thumbnailUrl} />
      ))}
    </>
  );
}

export default Transition;
