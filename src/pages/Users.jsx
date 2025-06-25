import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const User = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`)
      .then((res) => {
        setUser(res.data);
        setHasNext(res.data.length === 3);
      });
  }, [page]);
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  const moveSingleUser = (id) => {
    navigate(`/users/${id}`);
  };
  return (
    <div className="container">
      <div className="row mt-2">
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>address.city</th>
              <th>phone</th>
              <th>website</th>
              <th>company.name</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((item) => {
              return (
                <tr key={item.id} onClick={() => moveSingleUser(item.id)}>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.address.city}</td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                  <td>{item.company.name}</td>
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
      </div>
    </div>
  );
};

export default User;
