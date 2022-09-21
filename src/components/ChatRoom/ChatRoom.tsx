import { useEffect, useRef, useState } from "react";
import "firebase/auth";
import "firebase/analytics";
import ChatMessage from "../ChatMessage/ChatMessage";
import { useCollectionData } from "react-firebase-hooks/firestore";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Query } from "@firebase/firestore-types";
import * as S from "./ChatRom.styles";
import SignOut from "../SignOut/SignOut";

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
  const [formValue, setFormValue] = useState("");
  const dummy = useRef() as React.MutableRefObject<HTMLInputElement>;
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(10000);
  const [messages] = useCollectionData(query, { idField: "id" });

  const sendMessage = async (e: any) => {
    e.preventDefault();
    const uid = auth.currentUser?.uid;
    const photoURL = `https://robohash.org/${auth.currentUser?.uid}&200x200`;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    dummy.current.scrollIntoView({ behavior: "smooth" });
    setFormValue("");
  };

  return (
    <S.Wrapper>
      <S.StyledDiv>
        {" "}
        <SignOut />
        <button
          onClick={() => {
            dummy.current.scrollIntoView({ behavior: "auto" });
          }}
        ></button>
      </S.StyledDiv>
      <S.Main>
        {messages &&
          messages.map((msg: any) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        <div ref={dummy}></div>
      </S.Main>

      <S.FormWrapper onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Diga alguma coisa :D"
        />

        <button type="submit" disabled={!formValue}>
          Enviar
        </button>
      </S.FormWrapper>
    </S.Wrapper>
  );
}
