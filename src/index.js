import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnB89Uc7wNN_q2qRAVhmk5rIg2od2oYIg",
  authDomain: "habit-trackr-6e86d.firebaseapp.com",
  projectId: "habit-trackr-6e86d",
  storageBucket: "habit-trackr-6e86d.appspot.com",
  messagingSenderId: "3176632655",
  appId: "1:3176632655:web:8862ab88f02717580e353a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

