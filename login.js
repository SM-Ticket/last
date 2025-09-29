import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDm9m4QmdKa2vFuWVzhLe7rls9qO1MoQDg",
  authDomain: "ticket-7b1c2.firebaseapp.com",
  projectId: "ticket-7b1c2",
  storageBucket: "ticket-7b1c2.firebasestorage.app",
  messagingSenderId: "635784585376",
  appId: "1:635784585376:web:8059b424cee3aa657569c5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch((error) => {
      document.getElementById("login-error").textContent = error.message;
    });
});