import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCSCs6ki_0dcjhahuWNIPD8FdLi0Gmg6OM",
    authDomain: "facebook-clone-8731f.firebaseapp.com",
    databaseURL: "https://facebook-clone-8731f.firebaseio.com",
    projectId: "facebook-clone-8731f",
    storageBucket: "facebook-clone-8731f.appspot.com",
    messagingSenderId: "665151650400",
    appId: "1:665151650400:web:ffd32838d2323d532ba105",
    measurementId: "G-VS4ZCHXTM5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;