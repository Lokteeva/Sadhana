import React from 'react';
import { database } from 'firebase.js';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// import { db } from './firebase';
// import {
//   query,
//   collection,
//   onSnapshot,
//   updateDoc,
//   doc,
//   addDoc,
//   deleteDoc,
// } from 'firebase/firestore';


function App() {
  const history = useNavigate();

  const handleClick = ()=>{
    signOut(database).then(val=>{
      console.log(val, "out");
      history('/');
    });
  }

  return (
  <div>
    <h1>главная страница</h1>
    <button onClick={handleClick}>SingOut (выйти)</button>
  </div>
  );
}

export default App;
