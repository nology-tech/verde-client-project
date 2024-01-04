import { initializeApp } from "firebase/app";

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
