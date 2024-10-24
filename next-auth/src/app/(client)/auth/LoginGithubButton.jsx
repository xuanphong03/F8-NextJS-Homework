"use client";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { FaGoogle } from "react-icons/fa6";

export default function LoginGithubButton() {
  const t = useTranslations("AuthPage");

  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-2 bg-teal-500 text-white px-5 py-2 rounded min-w-80 text-lg justify-center dark:shadow dark:shadow-white"
    >
      <FaGoogle /> {t("sign-in-google")}
    </button>
  );
}
