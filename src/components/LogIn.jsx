import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";

const loginStatus = {
  idle: 0,
  success: 1,
  failed: 2,
};

const Login = () => {
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
      router.push("/MainPage");
      router.refresh();
    } else {
      setStatus(loginStatus.error);
      event.target.submit.setAttribute("disabled", false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 p-8 bg-gray-100 rounded-md">
        <div className="flex justify-center mb-4">
          <div className="mr-2">
            <Image
              src="/Images/university.png"
              alt="Logo"
              width={120}
              height={120}
            />
          </div>
          <div>
            <Image src="/Images/eng.png" alt="Logo" width={120} height={120} />
          </div>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
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
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
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
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-between mb-4 text-center">
            <button
              id="submit"
              type="submit"
              disabled={!username || !password}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ml-auto mr-auto"
            >
              Login
            </button>
          </div>

          {status === loginStatus.error && (
            <div className="text-center" style={{ color: "red" }}>
              Login Failed, Wrong Username or Password
            </div>
          )}

          {status === loginStatus.success && (
            <div className="text-center" style={{ color: "green" }}>
              Login Success, Will redirect you soon!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
