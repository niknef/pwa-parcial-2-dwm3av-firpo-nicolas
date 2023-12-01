// Importa las funciones necesarias de la SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDtrnNVYRky91svXfeMj7z286lOVDn0cpI",
    authDomain: "cinematch-a643c.firebaseapp.com",
    projectId: "cinematch-a643c",
    storageBucket: "cinematch-a643c.appspot.com",
    messagingSenderId: "95324671083",
    appId: "1:95324671083:web:804dae208c5d41151b752e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para manejar el inicio de sesión
window.handleLogin = function handleLogin() {
    const email = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;

    // Validación de entrada
    if (!email || !password) {
        alert('Por favor, ingrese tanto el correo electrónico como la contraseña.');
        return;
    }

    // Intenta iniciar sesión con Firebase
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Inicio de sesión exitoso
            const user = userCredential.user;
            console.log('Usuario autenticado:', user);
            // Redirige al usuario o realiza otras acciones según tus necesidades
            window.location.replace("/");
        })
        .catch((error) => {
            // Manejo de errores durante el inicio de sesión
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error de inicio de sesión:', errorCode, errorMessage);
            // Muestra un mensaje de alerta con el error
            alert(errorMessage);
        });
}