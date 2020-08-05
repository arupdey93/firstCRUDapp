import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import firebase from 'firebase/app'
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

var firebaseConfig = {
  apiKey: "AIzaSyB07F-_IFKYgbEBAM-_DqAMwxH6tnNLOxc",
  authDomain: "fir-proj-1-f9dfd.firebaseapp.com",
  databaseURL: "https://fir-proj-1-f9dfd.firebaseio.com",
  projectId: "fir-proj-1-f9dfd",
  storageBucket: "fir-proj-1-f9dfd.appspot.com",
  messagingSenderId: "520873555330",
  appId: "1:520873555330:web:413bce6be1bac907cf4b9b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


