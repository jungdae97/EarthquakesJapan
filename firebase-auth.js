import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3vLnw7QT2POb6Lp4sjgy23LWpmRcjTbU",
  authDomain: "earthquakesjapan-937da.firebaseapp.com",
  projectId: "earthquakesjapan-937da",
  storageBucket: "earthquakesjapan-937da.appspot.com",
  messagingSenderId: "405323686356",
  appId: "1:405323686356:web:acffd0d58650793119b641"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export function login() {
  return signInWithPopup(auth, provider);
}

export function logout() {
  return signOut(auth);
}

export function initAuthStatus({ onLogin, onLogout }) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (typeof onLogin === 'function') onLogin(user);
    } else {
      if (typeof onLogout === 'function') onLogout();
    }
  });
}