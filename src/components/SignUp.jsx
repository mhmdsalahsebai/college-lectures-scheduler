import React, { useState } from 'react';
import Select from 'react-select';

const SignUp = ({ onLogin, onSignUp }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const typeOptions = [
    { value: 'Professor', label: 'Professor' },
    { value: 'Teaching Assistant', label: 'Teaching Assistant' },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Sign Up clicked');
    // Call the onSignUp function with the form data
    onSignUp({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    });
  };

  const handlePhoneNumberChange = (e) => {
    // Allow only numeric input for phone number
    const numericValue = e.target.value.replace(/[^0-9,+]/g, '');
    setPhoneNumber(numericValue);
  };

  return (
    <form onSubmit={handleSignUp} className="max-w-md mx-auto mt-8">
      {/* <h1 className="text-center mb-4 text-2xl font-bold">Sign Up</h1> */}
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="formFirstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="formFirstName"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="formLastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="formLastName"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="formEmail" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          id="formEmail"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="formConfirmEmail" className="block text-sm font-medium text-gray-700">
          Confirm Email
        </label>
        <input
          type="email"
          id="formConfirmEmail"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Confirm your email"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="formPhoneNumber" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="formPhoneNumber"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Phone Number with country code"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="formPassword" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="formPassword"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Position
        </label>
        <Select
          options={typeOptions}
          value={selectedOption}
          onChange={handleChange}
          placeholder="Select your Position"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <button type="button" className="text-left text-blue-500" onClick={onLogin}>
          Back to Login
        </button>
        <button type="submit" className="text-right bg-blue-500 text-white px-4 py-2 rounded-md m-auto hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
