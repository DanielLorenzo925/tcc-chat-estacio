import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import * as S from "./ChatMessage.styles";

export interface ChatMessageProps {
  text: any;
  uid?: string;
  photoURL?: string;
}
const auth = firebase.auth();
export default function ChatMessage(props: any) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser?.uid ? "sent" : "received";
  //TODO: RESOLVER ESSA BAGAÇA;
  console.log(uid);
  console.log(auth.currentUser?.uid);
  return (
    <>
      {uid === auth.currentUser?.uid ? (
        <S.sent>
          <img
            src={
              photoURL ||
              "https://api.adorable.io/avatars/23/abott@adorable.png"
            }
            alt=""
          />
          <p>{text}</p>
        </S.sent>
      ) : (
        <S.recived>
          <img
            src={
              photoURL ||
              "https://api.adorable.io/avatars/23/abott@adorable.png"
            }
            alt=""
          />
          <p>{text}</p>
        </S.recived>
      )}
    </>
  );
}
