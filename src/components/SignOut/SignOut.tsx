import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { mdiLogoutVariant } from "@mdi/js";
import Icon from "@mdi/react";
import * as S from "./SignOut.styles";
const auth = firebase.auth();

export default function SignOut() {
  return (
    auth.currentUser && (
      <S.signOutButton className="sign-out" onClick={() => auth.signOut()}>
        <Icon path={mdiLogoutVariant} size={1.3} />
      </S.signOutButton>
    )
  );
}
