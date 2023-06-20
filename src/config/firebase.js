
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCjWGNkDZQQ-YembHfk-hIPaTjss1f3mXY",
  authDomain: "tik-tok---clone-dd.firebaseapp.com",
  projectId: "tik-tok---clone-dd",
  storageBucket: "tik-tok---clone-dd.appspot.com",
  messagingSenderId: "864433675799",
  appId: "1:864433675799:web:e44f03565369e2be9c8652"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;