import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SignUp from './SignUp';
// import ProfessorForm from './ProfessorForm';

const Login = () => {
  // const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  // const handleLogin = (e) => {
  //   // e.preventDefault();
  //   // // Add your authentication logic here
  //   // if (username === 'admin' && password === 'admin') {
  //   //   // Switch to ProfessorForm for admin
  //   //   console.log('Login clicked');
  //   //   router.push('/professor-form'); // Navigate to ProfessorForm route
  //   // } else {
  //   //   // Handle other user authentication logic
  //   //   console.log('Login clicked');
  //   // }
    
  // };
  const handleLogin = () => {
    // Add your authentication logic here
    if (username === 'admin' && password === 'admin') {
      // Switch to ProfessorForm for admin
      console.log('Right');
      // Use Link to navigate to ProfessorForm route
      return (
        <Link href="/MainPage/layout"> </Link>
      );
    } else {
      // Handle other user authentication logic
      console.log('Login clicked');
    }
  };

  const handleSignUp = (e) => {
    console.log('Sign Up clicked');
    // Add your logic to handle the sign-up action
  };

  const toggleView = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 p-8 bg-gray-100 rounded-md">
        <div className="flex justify-center mb-4">
          <div className="mr-2">
            <Image src='/Images/university.png' alt="Logo" width={120} height={120} />
          </div>
          <div>
            <Image src='/Images/eng.png' alt="Logo" width={120} height={120} />
          </div>
        </div>

        {isSignUp ? (
          <SignUp onLogin={toggleView} onSignUp={handleSignUp} />
        ) : (
          <form onSubmit={handleLogin}>
            {/* <h1 className="text-center mb-4 text-2xl font-bold">Sign in</h1> */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Login
              </button>
              <button
                type="button"
                onClick={toggleView}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
