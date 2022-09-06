import { useEffect, useState } from "react";

const PostStateComponent = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    setError(false)
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => data.json())
      .then((resp) => {
        console.log("What is resp -->", resp);
        setData(resp);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  //   useEffect(() => {
  //     handleFetch();
  //   }, []);

  return (
    <div>
      <h1>{data?.title}</h1>
      {loading ? (
        <p style={{ "color": "white" }}>...Loading</p>
      ) : (
        <>
          <p>{data.userId}</p>
          <button onClick={handleFetch}>Call Fetch</button>
        </>
      )}
      <span>{error && "Some Crap Went South!"}</span>
    </div>
  );
};

export default PostStateComponent;
