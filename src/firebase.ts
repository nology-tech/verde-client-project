import { initializeApp } from "firebase/app";
import { getAuth,  signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_TOKEN,
  authDomain: "verde-client-project.firebaseapp.com",
  projectId: "verde-client-project",
  storageBucket: "verde-client-project.appspot.com",
  messagingSenderId: "16287541815",
  appId: "1:16287541815:web:49399104d1c2f8d665adb2",
  measurementId: "G-NG4YBJ04DP",
};

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const loginEmailPassword = async () => {
  const userCredential = await signInWithEmailAndPassword(auth, 'mk@test.com', 'mk123456')
  console.log('MK in the house')
  console.log(userCredential.user)
  
}