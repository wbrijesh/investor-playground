import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import "../configureAmplify";
import SignIn from "../Components/SignIn";

const initialFormState = { email: "", password: "", authCode: "" };

function Profile() {
  const [uiState, setUiState] = useState(null);
  const [formState, setFormState] = useState(initialFormState);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    async function checkUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
        setUiState("signedIn");
        console.log(user);
      } catch (error) {
        setUser(null);
        setUiState("signIn");
        console.log(error);
      }
    }
  }, []);

  function onChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="bg-gray-50 min-h-screen ">
      <div className="flex flex-col items-center">
        <div className="max-w-full sm:w-540 mt-14">
          <div className="bg-white shadow-form rounded px-16 py-14">
            {uiState === "signIn" && (
              <SignIn onChange={onChange} setUiState={setUiState} />
            )}
            {uiState === "signedIn" && (
              <>
                <p className="text-xl font-semibold">
                  Welcome, {user.attributes.email}
                </p>
                <button
                  className="text-white w-full mt-10 bg-pink-600 p-3 rounded"
                  onClick={() => {
                    Auth.signOut();
                    setUiState("signIn");
                    setUser(null);
                  }}
                >
                  Sign out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
