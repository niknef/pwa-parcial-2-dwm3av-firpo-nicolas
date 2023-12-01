import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
        import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

        const firebaseConfig = {
        apiKey: "AIzaSyDtrnNVYRky91svXfeMj7z286lOVDn0cpI",
        authDomain: "cinematch-a643c.firebaseapp.com",
        projectId: "cinematch-a643c",
        storageBucket: "cinematch-a643c.appspot.com",
        messagingSenderId: "95324671083",
        appId: "1:95324671083:web:804dae208c5d41151b752e"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    function checkAuthState() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
        console.log("Usuario autenticado:", user);
        } else {
        window.location.replace("../html/login.html");
        console.log("Usuario no autenticado, redirigiendo al login...")
        }
    });
    }

checkAuthState();