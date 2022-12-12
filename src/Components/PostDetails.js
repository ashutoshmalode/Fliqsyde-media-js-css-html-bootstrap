import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetails(props) {
  const params = useParams();
  const [post, setPost] = useState(null);

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
      let newPost = resData.data.find((pst) => {
        return params.id === pst.id;
      });
      setPost(newPost);
    };
    getPosts();
  }, [setPost, params]);

  if (!post) return <div> No data </div>;

  return (
    <>
      <div>
        <h1 className="text-center my-5 ">{props.postTitle}</h1>
        <div className="container">
          <p>
            <strong>Owner Name : </strong> {post.owner.title}{" "}
            {post.owner.firstName} {post.owner.lastName}{" "}
          </p>
          <p>
            <strong>Pet Name : </strong>
            {post.text}
          </p>
          <p>
            <strong>Publish Date : </strong>
            {post.publishDate}
          </p>
          <p>
            <strong>Tags : </strong> {post.tags[0]}, {post.tags[1]},{" "}
            {post.tags[2]}
          </p>
          <p>
            <strong>Likes : </strong>
            {post.likes}
          </p>
        </div>
      </div>
    </>
  );
}

export default PostDetails;
