import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKnZxCH-omEqmaTyC8hT4_ujJgie6q3tE",
  authDomain: "social-media-mern-d7256.firebaseapp.com",
  projectId: "social-media-mern-d7256",
  storageBucket: "social-media-mern-d7256.appspot.com",
  messagingSenderId: "387162854099",
  appId: "1:387162854099:web:459d92004a875a1b03ba26",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
