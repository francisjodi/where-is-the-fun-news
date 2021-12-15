import { useState, useEffect } from "react"
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { auth } from "./firebaseConfig"
import styled from "styled-components";
import Title from "./components/Title";

const FullPageDiv = styled.div`
  position: absolute;
  x: 0;
  y: 0;
  z-index: -1;
  width: 100vw;
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  padding: 3px;
  background: rgb(156,45,253);
  background: linear-gradient(0deg, rgba(156,45,253,1) 0%, rgba(34,193,195,1) 100%);
  border-radius: 25px;
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SignInBtn = styled.button`
  border-radius: 25px;
  border: none;
  width: 99%;
  height: 50px;
  cursor: pointer;
`

const SignOutDiv = styled.div`
  position: absolute;
  right: max(50px, 10%);
  top: 68px;
`;

const SignOutBtn = styled.button`
  border-radius: 25px;
  border: none;
  width: 99%;
  height: 25px;
  cursor: pointer;
`;

export function SignIn() {
  return (
    <div>
      <Title />
      <FullPageDiv>
        <Background>
          <SignInBtn onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>Sign In</SignInBtn>
        </Background>
      </FullPageDiv>
    </div>
  )
}

export function SignOut() {
  return (
    <SignOutDiv>
      <Background>
        <SignOutBtn onClick={() => {
          signOut(auth);
          window.location.href = "/";
        }}>
          Sign Out
        </SignOutBtn>
      </Background>
    </SignOutDiv>
  )
}

export function useAuthentication() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null)
    })
  }, [])
  return user
}