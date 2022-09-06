import { useEffect, useState } from "react";

const PostStateComponent = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => data.json())
      .then((resp) => {
        console.log("What is resp -->", resp);
        setData(resp);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    
      handleFetch();
    
  }, []);
  return (
    <div>
      {loading ? (
        <p style={{ "color": "white" }}>...Loading</p>
      ) : (
        <>
          <p>{data.userId}</p>
          <button>Click</button>
        </>
      )}
    </div>
  );
};

export default PostStateComponent;
