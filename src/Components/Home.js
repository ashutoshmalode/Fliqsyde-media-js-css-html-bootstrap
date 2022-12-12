import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";

function Home(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://dummyapi.io/data/v1/post?limit=10";
    const getPosts = async () => {
      const resposnse = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "app-id": "636ddf474ea4174e4243cb66",
        },
      });
      const resData = await resposnse.json();
      setData(resData.data);
    };
    getPosts();
  });

  return (
    <div>
      <h1 className="text-center mt-5">{props.homeTitle}</h1>
      {data.map((postData) => {
        return (
          <div key={postData.id} className="container row m-5 px-5">
            <PostItem postData={postData} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
