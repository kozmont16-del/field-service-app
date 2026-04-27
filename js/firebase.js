
const firebaseConfig = {
  apiKey: "AIzaSyCd1bFPWT-P-aLRzzbDV3CFo1vJg4XHS9o",
  authDomain: "zone-967f4.firebaseapp.com",
  projectId: "zone-967f4",
storageBucket: "zone-967f4.firebasestorage.app",
  messagingSenderId: "147792254614",
  appId: "1:147792254614:web:f320ce2a17ad8e945bd4b7",
  measurementId: "G-409LYRBJZX"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
