import React, { useState } from 'react';
import { database } from 'firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './index.css'

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handlSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (type == 'signup') {
      createUserWithEmailAndPassword(database, email, password).then((data) => {
        console.log(data, 'authData');
        history('/home');
      }).catch(err=>{
        alert(err.code)
        setLogin(true)
      })
    }else {
      signInWithEmailAndPassword(database, email, password).then((data) => {
        console.log(data, 'authData');
        history('/home');
      }).catch(err=>{
        alert(err.code)
      })
    }
  };

  return (
    <div>
      <div className='row'>
        <div className={login == false ? 'activeColor' : 'pointer'} onClick={()=>setLogin(false)}>Регистрация</div>
        <div className={login == true ? 'activeColor' : 'pointer'} onClick={()=>setLogin(true)}>Вход</div>
      </div>
      <h1>{login ? 'Вход' : 'Регистрация'}</h1>
      <form onSubmit={(e) => handlSubmit(e, login ? 'signin' : 'signup')}>
        <input name="email" placeholder="Email" />
        <input name="password" placeholder="Password" />
        <button>{login ? 'Вход' : 'Регистрация'}</button>
      </form>
    </div>
  );
}

export default RegisterAndLogin;
