import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Iltimos, email va parolni to‘ldiring!");
      return;
    }
    navigate("/api");
  };

  return (
    <div className="container mt-5 ">
      <h2 className="mb-4 text-center">Kirish</h2>
      <form onSubmit={handleLogin} className="w-50 mx-auto">
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email kiriting"
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parol kiriting"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Kirish
        </button>
      </form>
    </div>
  );
}

export default SignIn;
