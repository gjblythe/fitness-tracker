import firebase from 'firebase';
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { SignOut } from './login/SignOut';
import { ChatMessage, IMessage } from './messages/ChatMessage';

interface IProps {
  auth: firebase.auth.Auth;
  firestore: firebase.firestore.Firestore;
}

export const Home = ({auth, firestore}: IProps) => {
  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limitToLast(25);

  const [messages] = useCollectionData<IMessage>(query, { idField: 'id'});
  
  return (
    <main>
      <>
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg}/>)}
      </>
      <SignOut auth={auth}/>
    </main>
  );
};
