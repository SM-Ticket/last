import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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

document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("signup-confirm-password").value;

  if (password !== confirmPassword) {
    document.getElementById("signup-error").textContent = "Passwords do not match.";
    return;
  }

 createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    localStorage.setItem("savedEmail", email); 
    window.location.href = "login.html"; 
  })
  .catch((error) => {
    document.getElementById("signup-error").textContent = error.message;
  });

}
);  