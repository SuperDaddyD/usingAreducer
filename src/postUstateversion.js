import { useEffect, useState } from "react";

const PostStateComponent = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState(false);

  const handleFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => data.json())
      .then((resp) =>{
        console.log('What is resp -->',resp)
        setData(resp)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{
   setTimeout(()=>{
    handleFetch()
   },6000)
  },[])
  return (
    <div>
      {<p>{data.userId}</p>}
    </div>
  );
};

export default PostStateComponent;
