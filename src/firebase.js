import { initializeApp } from "firebase/app"; // Import Firebase app
import { getAuth } from "firebase/auth"; // Import Firebase authentication
import { getStorage } from "firebase/storage"; // Import Firebase storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU-NGhXdJEcaqQYskUurroP6URLwpXXns",
  authDomain: "machines-and-goods-ghana.firebaseapp.com",
  projectId: "machines-and-goods-ghana",
  storageBucket: "machines-and-goods-ghana.appspot.com",
  messagingSenderId: "99040305153",
  appId: "1:99040305153:web:132bdf8fcf4235c2f46000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { auth, storage };
