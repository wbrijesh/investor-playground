import { Auth } from "aws-amplify";
import SocialSignIn from "./SocialSignIn";

export default function SignIn() {
  return (
    <div className="sign-in">
      <SocialSignIn />
    </div>
  );
}
