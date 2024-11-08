import SignInForm from "./SignInForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignInPage() {
  return (
    <>
      <div className="relative bg-black bg-opacity-70 text-white px-10 py-8 rounded-md">
        <h1 className="font-bold text-3xl mb-7">Sign In</h1>
        <SignInForm />
      </div>
      <ToastContainer
        limit={2}
        closeOnClick
        autoClose={2000}
        position="bottom-right"
      />
    </>
  );
}
