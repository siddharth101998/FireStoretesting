// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD30kvfikGzX56aGhNYJXl3-GWY53_HZzs",
    authDomain: "newdb-87580.firebaseapp.com",
    projectId: "newdb-87580",
    storageBucket: "newdb-87580.appspot.com",
    messagingSenderId: "201642851157",
    appId: "1:201642851157:web:ad6d068e71b7738fda8ddc",
    measurementId: "G-2LKYT5CZ47"
};

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);

try {
    const docRef = await addDoc(collection(db, "users"), {
        name: "Ansley",
        college: "Pace",
        age: 22
    });
    console.log("Document written with ID: ", docRef.id);


    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().name}`);
    });

} catch (e) {
    console.error("Error adding document: ", e);
}
