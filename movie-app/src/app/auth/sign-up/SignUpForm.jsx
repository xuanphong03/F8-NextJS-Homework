"use client";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Link from "next/link";
import PasswordField from "../_components/form-controls/PasswordField";
import InputField from "../_components/form-controls/InputField";
import { toast } from "react-toastify";
import { Progress } from "@nextui-org/react";

export default function SignUpForm() {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required."),
    email: yup
      .string()
      .required("Email is required.")
      .email("Email is invalid."),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(255, "Password length maximum 255 characters"),
    retypePassword: yup
      .string()
      .required("Retype password is required")
      .oneOf([yup.ref("password")], `Passwords don't match`),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = async (data) => {
    console.log("Sign in data:", data);
    reset();
    return toast.info("This feature is still in development.");
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)} className="w-[400px] ">
      {isSubmitting && (
        <div className="absolute top-0 left-0 right-0">
          <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="w-full"
          />
        </div>
      )}
      <div className="mb-4">
        <InputField
          id="fullName"
          label="Full name"
          register={{ ...register("fullName") }}
          errorMessage={errors.fullName?.message}
        />
      </div>
      <div className="mb-4">
        <InputField
          id="email"
          label="Your email"
          register={{ ...register("email") }}
          errorMessage={errors.email?.message}
        />
      </div>
      <div className="mb-4">
        <PasswordField
          id="password"
          label="Password"
          register={{ ...register("password") }}
          errorMessage={errors.password?.message}
        />
      </div>
      <div className="mb-4">
        <PasswordField
          id="retypePassword"
          label="Retype password"
          register={{ ...register("retypePassword") }}
          errorMessage={errors.retypePassword?.message}
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        <button
          type="submit"
          className="h-10 px-5 py-2 flex items-center justify-center bg-yellow-500 text-white font-medium w-full rounded hover:bg-opacity-80 transition-all"
        >
          Sign Up
        </button>
        <div className="flex items-center justify-between text-sm w-full">
          <Link
            href="#"
            className="hover:underline hover:text-gray-400 transition-all"
          >
            Forgot password?
          </Link>
          <p className="flex items-center gap-2">
            You already have an account?
            <Link
              href="/auth/sign-in"
              className="hover:underline hover:text-yellow-500 transition-all"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}
