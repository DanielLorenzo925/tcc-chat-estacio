import "firebase/analytics";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "../ChatMessage/ChatMessage";
import Icon from "@mdi/react";
import useOnScreen from "../../Shared/functions";
import SignOut from "../SignOut/SignOut";
import * as S from "./ChatRom.styles";
import { mdiArrowDownCircle } from "@mdi/js";

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
  const query = messagesRef.orderBy("createdAt");
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

  const isVisible = useOnScreen(dummy);
  return (
    <S.Wrapper>
      <S.StyledDiv>
        <S.TitleWrapper>
          {" "}
          <S.styledImg
            src="https://www.unibalsas.edu.br/wp-content/uploads/2017/01/si.png"
            alt="logoSI"
          ></S.styledImg>
          <h2>Sistemas de Informação</h2>
        </S.TitleWrapper>
        <SignOut />
      </S.StyledDiv>

      <S.Main>
        <S.RollDownWrapper>
          {" "}
          {isVisible ? null : (
            <S.ButtonRollDown
              onClick={() => {
                dummy.current.scrollIntoView({ behavior: "auto" });
              }}
            >
              <Icon path={mdiArrowDownCircle} size={1} /> Mensagens recentes
            </S.ButtonRollDown>
          )}
        </S.RollDownWrapper>
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
