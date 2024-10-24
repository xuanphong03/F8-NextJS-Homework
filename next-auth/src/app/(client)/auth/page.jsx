import LoginGithubButton from "./LoginGithubButton";
import LoginGoogleButton from "./LoginGoogleButton";
import { useTranslations } from "next-intl";

export default function AuthPage() {
  const t = useTranslations("AuthPage");
  return (
    <div className="flex flex-col items-center pt-20">
      <p>© 2024 Xuan Phong portfolio</p>
      <h2 className="mt-5">{t("introduction")}</h2>
      <div className="flex flex-col gap-5 items-center mt-10 p-5 rounded-md shadow-blue-400 shadow-around">
        <h1 className="text-3xl font-bold text-center">{t("sign-in-title")}</h1>
        <LoginGithubButton />
        <LoginGoogleButton />
        <p>{t("description")}</p>
      </div>
    </div>
  );
}
