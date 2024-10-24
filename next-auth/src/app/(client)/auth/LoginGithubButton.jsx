"use client";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa6";

export default function LoginGithubButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-2 bg-teal-500 text-white px-5 py-2 rounded min-w-80 text-lg justify-center dark:shadow dark:shadow-white"
    >
      <FaGoogle /> Đăng nhập với Google
    </button>
  );
}
