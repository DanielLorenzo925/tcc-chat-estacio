import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const auth = firebase.auth();

export default function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}
