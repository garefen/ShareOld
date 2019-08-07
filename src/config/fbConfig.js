import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'  

var firebaseConfig = {
    apiKey: "AIzaSyCqNU5gVzy0UyfYrjuvOcybhIoAw2TTqEk",
    authDomain: "share-b765d.firebaseapp.com",
    databaseURL: "https://share-b765d.firebaseio.com",
    projectId: "share-b765d",
    storageBucket: "share-b765d.appspot.com",
    messagingSenderId: "922286958748",
    appId: "1:922286958748:web:e01dbeb81fe61af8"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;