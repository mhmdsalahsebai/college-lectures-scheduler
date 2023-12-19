import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import Link from "next/link";

const loginStatus = {
  idle: 0,
  success: 1,
  failed: 2,
};

const Login = ({ handleAuthorization }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [status, setStatus] = useState(loginStatus.idle);

  const handleLogin = async (event) => {
    event.target.submit.setAttribute("disabled", true);
    event.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    const { success } = await res.json();

    if (success) {
      setStatus(loginStatus.success);
      handleAuthorization(true);
    } else {
      setStatus(loginStatus.error);
      handleAuthorization(false);
      event.target.submit.setAttribute("disabled", false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 p-8 bg-white rounded-2xl">
        <div className="flex justify-center mb-4">
          <div className="mr-2">
            <Image
              src="/Images/eng.png"
              alt="Logo1"
              width={150}
              height={150}
              className="mt-1"
            />
          </div>
          <div>
            <Image
              src="/Images/university.png"
              alt="Logo2"
              width={150}
              height={150}
            />
          </div>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <h1 className="block text-center text-3xl	 font-medium text-gray-700 cursor-default">
              Login
            </h1>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 text-sm p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full text-sm border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-between mb-4 text-center">
            <button
              id="submit"
              type="submit"
              disabled={!username || !password}
              className="px-5 py-2 text-gray-700 rounded-md border border-blue-600 hover:bg-blue-600 hover:text-white focus:outline-blue-600 focus:ring focus:border-blue-300 ml-auto mr-auto cursor-pointer"
            >
              Login
              <Link href="./MainPage"></Link>
            </button>
          </div>

          {status === loginStatus.error && (
            <div className="text-center text-sm" style={{ color: "red" }}>
              Login Failed, Wrong Username or Password
            </div>
          )}

          {status === loginStatus.success && (
            <div className="text-center text-sm" style={{ color: "green" }}>
              Login Success, Will redirect you soon!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
