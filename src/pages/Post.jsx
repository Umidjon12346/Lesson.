import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
const Post = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState();
  const [hasNext, setHasNext] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      )
      .then((res) => {
        setPost(res.data);
        setHasNext(res.data.length === limit);
      });
  }, [page, limit]);
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  const handleLimitChange = (e) => {
    const value = parseInt(e.target.value);
    if ((!isNaN(value) && value > 0) || value < 50) {
      setLimit(value);
      setPage(1);
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <table className="table-bordered table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {post.map((item) => (
              <tr key={item.userId}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="row mt-4 text-center">
          <button
            className="btn btn-secondary mx-1"
            onClick={nextPage}
            disabled={!hasNext}
          >
            Next
          </button>
          <span>{page}</span>
          <button
            className="btn btn-secondary mx-1"
            onClick={prevPage}
            disabled={page === 1}
          >
            Prev
          </button>
        </div>
        <input
          type="number"
          value={limit}
          onChange={handleLimitChange}
          placeholder="Limit"
          defaultChecked="1"
        />
      </div>
    </div>
  );
};

export default Post;
