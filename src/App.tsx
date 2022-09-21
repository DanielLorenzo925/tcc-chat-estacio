import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import SignIn from "./components/SignIn/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import { firebaseConfig } from "./Shared/firebaseconfig";

const auth = firebase.auth();
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
