import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyC4I48BMsJ0sXj5LmPVSmWJHwwpZxSgyco",
  authDomain: "tcc-projectestacio.firebaseapp.com",
  projectId: "tcc-projectestacio",
  storageBucket: "tcc-projectestacio.appspot.com",
  messagingSenderId: "455311003095",
  appId: "1:455311003095:web:0f2a77cb28d788fd7f8f92",
});
const auth = firebase.auth();
export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
}
