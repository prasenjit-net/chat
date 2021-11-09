// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const registerFirebase = () => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDakoEkIuvRvXNldOSpI6hb-J1FvWR4LNs",
        authDomain: "chat-533d9.firebaseapp.com",
        projectId: "chat-533d9",
        storageBucket: "chat-533d9.appspot.com",
        messagingSenderId: "179278512418",
        appId: "1:179278512418:web:49c64dcbaf7e11f98fa57b",
        measurementId: "G-6GKCRHGK9T"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    return {app, analytics};
}
