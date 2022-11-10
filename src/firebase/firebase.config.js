// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyD6bATnZjE2HGsHE34ECr96vtKO8P2kNXg",
//     authDomain: "immigration-visa-client.firebaseapp.com",
//     projectId: "immigration-visa-client",
//     storageBucket: "immigration-visa-client.appspot.com",
//     messagingSenderId: "714825467716",
//     appId: "1:714825467716:web:ebaabb7fe60241951a7911"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;