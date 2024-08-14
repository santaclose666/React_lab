import React, { useState } from "react";
import "./App.css";
import Field from "./component/Field";

type errorType = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<errorType>({});

  const passwordValidate = () => {
    if (password.length < 8) return false;

    let isLowerCase = false,
      isUpperCase = false,
      isNumber = false;
    for (let char of password) {
      if (char.toLowerCase() === char) isLowerCase = true;
      if (char.toUpperCase() === char) isUpperCase = true;
      if (!isNaN(Number(char))) isNumber = true;

      if (isLowerCase && isUpperCase && isNumber) {
        return true;
      }
    }

    return isLowerCase && isUpperCase && isNumber;
  };

  const validate = () => {
    let tempErrors: errorType = {};

    if (name.length < 3) {
      tempErrors.name = "Name must be at least 3 characters long";
    }

    if (!email.includes("@")) {
      tempErrors.email = "Invalid email format";
    }

    if (!passwordValidate()) {
      tempErrors.password =
        "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number";
    }

    if (confirmPassword !== password) {
      tempErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length !== 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isError = validate();

    if (!isError) {
      alert("Login successfully!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-1/5 space-y-4 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-10"
      >
        <h1 className="text-indigo-600 text-3xl font-bold mb-6 text-center">
          Signup
        </h1>
        <Field
          field="Name"
          value={name}
          onTextChange={setName}
          error={errors.name}
        />
        <Field
          field="Email"
          type="email"
          value={email}
          onTextChange={setEmail}
          error={errors.email}
        />
        <Field
          field="Password"
          type="password"
          value={password}
          onTextChange={setPassword}
          error={errors.password}
        />
        <Field
          field="Confirm Password"
          type="password"
          value={confirmPassword}
          onTextChange={setConfirmPassword}
          error={errors.confirmPassword}
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
