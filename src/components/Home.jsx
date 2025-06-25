import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="gap-2 m-2">
      <div className="gap-2 d-flex">
        <Link to="users" className="btn btn-success">
          User
        </Link>
        <Link to="comments" className="btn btn-success">
          Comment
        </Link>
        <Link to="products" className="btn btn-success">
          Products
        </Link>
        <Link to="posts" className="btn btn-success">
          Posts
        </Link>
      </div>
    </div>
  );
}

export default Home;
