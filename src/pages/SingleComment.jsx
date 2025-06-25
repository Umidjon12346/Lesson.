import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SingleComment = () => {
  const [comment, setComment] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => {
        setComment(res.data);
      });
  }, []);
  return (
    <div>
      <h1>About Comment</h1>
      <p>{comment?.id}</p>
      <p>{comment?.name}</p>
      <p>{comment?.email}</p>
      <p>{comment?.body}</p>
    </div>
  );
};

export default SingleComment;
