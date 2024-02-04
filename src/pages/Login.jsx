import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export default function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!passwordRegex.test(values.password)) {
      setError(true);
      setIsLoggedIn(false);
      return;
    }
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    navigate("/platform");
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[500px] flex justify-between flex-col">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-blue-950 p-4 w-full rounded-md"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            className="p-2 outline-none focus:ring-0 rounded-md"
            value={values.name}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="p-2 outline-none focus:ring-0 rounded-md"
            value={values.password}
            onChange={handleChange}
            required
          />
          <button className="p-2 bg-blue-600 hover:scale-105 duration-200 text-white font-bold rounded-md">
            Submit
          </button>
          {error && (
            <p className="font-bold text-red-500">
              Password should contain at least 8 characters, one uppercase
              letter, one lowercase letter, and one special character.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
