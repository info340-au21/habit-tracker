import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnB89Uc7wNN_q2qRAVhmk5rIg2od2oYIg",
  authDomain: "habit-trackr-6e86d.firebaseapp.com",
  databaseURL: "https://habit-trackr-6e86d-default-rtdb.firebaseio.com",
  projectId: "habit-trackr-6e86d",
  storageBucket: "habit-trackr-6e86d.appspot.com",
  messagingSenderId: "3176632655",
  appId: "1:3176632655:web:8862ab88f02717580e353a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
