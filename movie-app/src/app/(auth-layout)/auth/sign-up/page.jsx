import SignUpForm from "./SignUpForm";

export default function SignUpPage() {
  return (
    <div className="relative bg-black bg-opacity-70 text-white px-10 py-8 rounded-md">
      <h1 className="font-bold text-3xl mb-7">Sign Up</h1>
      <SignUpForm />
    </div>
  );
}
