import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';
import firebase from 'firebase/app';
import {BrowserRouter} from 'react-router-dom';
import 'firebase/auth';
import 'firebase/database';
import { initializeApp } from "firebase/app";

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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

