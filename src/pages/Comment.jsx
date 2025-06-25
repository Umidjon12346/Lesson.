import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Comment = () => {
  const [comment, setComment] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState();
  const [hasNext, setHasNext] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`
      )
      .then((res) => {
        setComment(res.data);
        setHasNext(res.data.length === limit || 3);
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
    if (!isNaN(value) && value > 0) {
      setLimit(value);
      setPage(1);
    }
  };

  const moveSingleComment = (id) => {
    navigate(`/comments/${id}`);
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <table className="table-bordered table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {comment?.map((item) => {
              return (
                <tr key={item.id} onClic={() => moveSingleComment(item.id)}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.body}</td>
                </tr>
              );
            })}
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
          defaultValue={3}
        />
      </div>
    </div>
  );
};

export default Comment;
