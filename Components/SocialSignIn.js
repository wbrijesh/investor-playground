import { Auth } from "aws-amplify";
import { FaGoogle } from "react-icons/fa";

export default function SocialSignIn() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">Social Sign In</h1>
      <button
        className="mt-10 focus:outline-none"
        onClick={() => Auth.federatedSignIn({ provider: "Google" })}
      >
        <div className="flex border-2 border-blue-400 p-2 rounded-full items-center justify-center text-blue-500 font-bold">
          <FaGoogle size="20" className="text-blue-500" />
          <p className="ml-4">Sign in with Google</p>
        </div>
      </button>
    </div>
  );
}
