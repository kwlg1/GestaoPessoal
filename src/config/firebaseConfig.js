import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyALuCPQQwTW61eM5UJ8Q6yKI86Y5K7XmbE",
  authDomain: "jorginproject.firebaseapp.com",
  projectId: "jorginproject",
  storageBucket: "jorginproject.appspot.com",
  messagingSenderId: "152420275426",
  appId: "1:152420275426:web:d250e4f3d74ce5d00d3abb"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase;
