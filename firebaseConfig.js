import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNZI4Qm8cpoG1yeX1-tAEN2eG5ft_Yjno",
  authDomain: "agile-project-25d43.firebaseapp.com",
  projectId: "agile-project-25d43",
  storageBucket: "agile-project-25d43.firebasestorage.app",
  messagingSenderId: "21346969728",
  appId: "1:21346969728:web:6527c0da74c41962875e65",
  databaseURL: "https://agile-project-25d43-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// export
export { db, auth };
