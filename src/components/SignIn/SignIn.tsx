import Icon from "@mdi/react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import * as S from "./SignIn.styles";
import { mdiGoogle } from "@mdi/js";

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
    <S.Wrapper>
      <S.LoginWrapper>
        <S.styledImg
          src="https://www.unibalsas.edu.br/wp-content/uploads/2017/01/si.png"
          alt="logoSI"
        ></S.styledImg>
        <h4>Chat Sistemas de informação</h4>
        <S.ButtonLogin className="sign-in" onClick={signInWithGoogle}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
            sizes="10px"
            alt="google login"
          ></img>
          <strong>Entrar com Google</strong>
        </S.ButtonLogin>
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
