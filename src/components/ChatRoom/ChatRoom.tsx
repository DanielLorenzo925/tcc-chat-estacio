import { useRef, useState } from "react";
import "firebase/auth";
import "firebase/analytics";
import ChatMessage from "../ChatMessage/ChatMessage";
import { useCollectionData } from "react-firebase-hooks/firestore";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Query } from "@firebase/firestore-types";

const firebaseConfig = {
  apiKey: "AIzaSyC4I48BMsJ0sXj5LmPVSmWJHwwpZxSgyco",
  authDomain: "tcc-projectestacio.firebaseapp.com",
  projectId: "tcc-projectestacio",
  storageBucket: "tcc-projectestacio.appspot.com",
  messagingSenderId: "455311003095",
  appId: "1:455311003095:web:0f2a77cb28d788fd7f8f92",
};

const firestore = firebase.firestore();
const auth = firebase.auth();

export default function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e: any) => {
    e.preventDefault();

    const uid = auth.currentUser?.uid;
    const photoURL = auth.currentUser?.photoURL;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
  };

  return (
    <div className="Wrapper">
      <div
        style={{
          width: "100%",
          marginLeft: "18px",
          backgroundColor: "aquamarine",
          height: "50px",
          display: "flex",
          border: "1px solid black",
        }}
      ></div>
      <main>
        {messages &&
          messages.map((msg: any) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Diga alguma coisa :D"
        />

        <button type="submit" disabled={!formValue}>
          Enviar
        </button>
      </form>
    </div>
  );
}
