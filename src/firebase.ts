import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  onAuthStateChanged 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_TOKEN,
  authDomain: "verde-client-project.firebaseapp.com",
  projectId: "verde-client-project",
  storageBucket: "verde-client-project.appspot.com",
  messagingSenderId: "16287541815",
  appId: "1:16287541815:web:49399104d1c2f8d665adb2",
  measurementId: "G-NG4YBJ04DP",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

/**
 * Logs in a user using email and password credentials.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<UserCredential>} A promise that resolves to the user credential upon successful login.
 * @throws {FirebaseError} If the login attempt fails, it throws a FirebaseError with details.
 */
export const loginEmailPassword = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
};

const monitorAuthState= async() => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user)
      
    } else {
      
    }
  })
}