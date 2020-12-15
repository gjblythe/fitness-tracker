import firebase from 'firebase';
import React from 'react'

interface IProps {
  auth: firebase.auth.Auth;
}

export const SignIn = ({auth}: IProps) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
};
