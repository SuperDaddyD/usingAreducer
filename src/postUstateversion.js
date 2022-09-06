import { useState } from "react";

const PostStateComponent = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState(false);

  const handleFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => data.json())
      .then((resp) => setData(resp))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {data.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};
