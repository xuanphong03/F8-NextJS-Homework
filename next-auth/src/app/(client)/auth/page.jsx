import { FaGithub, FaGoogle } from "react-icons/fa6";
import LoginGithubButton from "./LoginGithubButton";
import LoginGoogleButton from "./LoginGoogleButton";

export default function AuthPage() {
  return (
    <div className="flex flex-col items-center pt-20">
      <p>© 2024 Xuan Phong portfolio</p>
      <h2 className="mt-5">
        Xin chào, mình là Phong, đây là trang cá nhân của mình.
      </h2>
      <div className="flex flex-col gap-5 items-center mt-10 p-5 rounded-md shadow-blue-400 shadow-around">
        <h1 className="text-3xl font-bold text-center">Đăng nhập</h1>
        <LoginGithubButton />
        <LoginGoogleButton />
        <p>
          Đăng nhập để liên hệ, bình luận và khám phá nhiều tính năng thú vị
          khác.
        </p>
      </div>
    </div>
  );
}
