import firebase from 'firebase';
import React from 'react'

interface IProps {
  auth: firebase.auth.Auth;
}

export const SignOut = ({auth}: IProps) => {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign out</button>
  );
};
