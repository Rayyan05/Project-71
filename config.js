import firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyC8yQOFF4-b9AsxQCuyE5mNfsP-ak-ys8Y",
  authDomain: "wily-app-42445.firebaseapp.com",
  projectId: "wily-app-42445",
  storageBucket: "wily-app-42445.appspot.com",
  messagingSenderId: "524618737927",
  appId: "1:524618737927:web:710150f55852072c2ebda2"
};

firebase.initializeApp(firebaseConfig)

export default firebase.firestore();
