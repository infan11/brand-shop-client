// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { 
  // 
  apiKey: import.meta.env.VITE_KEYapiKey,
  authDomain: import.meta.env.VITE_KEYauthDomain,
  projectId: import.meta.env. VITE_KEYprojectId,
  storageBucket: import.meta.env.VITE_KEYstorageBucket,
  messagingSenderId: import.meta.env.VITE_KEYmessagingSenderId,
  appId: import.meta.env.VITE_KEYappId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;