import firebase from 'firebase';
import React from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseConfig } from './firebaseConfig';
import { SignIn } from './components/login/SignIn';
import { Home } from './components/Home';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// https://fireship.io/lessons/react-firebase-chat-app-tutorial/
const firestore = firebase.firestore();

export const App = () => {
  const [user, loading] = useAuthState(auth)
  return (
    <div className="App">
      <header className="App-header">
      {/* entry point use react router dom */}
      <section>{user ? <Home auth={auth} firestore={firestore}/> : <SignIn auth={auth}/>}</section>
      </header>
    </div>
  );
}

export default App;
