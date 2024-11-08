"use client";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import "./form-controls.css";

export default function PasswordField({ id, label, register, errorMessage }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="password-field w-full border border-solid border-white rounded overflow-hidden h-14 flex items-end">
        <input
          id={id}
          {...register}
          placeholder=""
          autoComplete="off"
          type={!showPassword ? "password" : "text"}
          className="bg-transparent px-4 py-2 rounded w-full"
        />
        <label
          htmlFor={id}
          className="label-field text-gray-400 flex items-center px-4 transition-all"
        >
          {label}
        </label>
        <button
          onClick={handleToggleShowPassword}
          className="toggle-password absolute bottom-2 right-4 hover:cursor-pointer size-6"
        >
          {!showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      {errorMessage && (
        <p className="mt-1 px-1 text-xs text-red-500">{errorMessage}</p>
      )}
    </>
  );
}
