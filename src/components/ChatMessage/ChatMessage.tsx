import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export interface ChatMessageProps {
  text: any;
  uid?: string;
  photoURL?: string;
}
const auth = firebase.auth();
export default function ChatMessage(props: any) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser?.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
}
