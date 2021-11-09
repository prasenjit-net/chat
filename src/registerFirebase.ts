import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyDakoEkIuvRvXNldOSpI6hb-J1FvWR4LNs",
    authDomain: "chat-533d9.firebaseapp.com",
    databaseURL: "https://chat-533d9-default-rtdb.firebaseio.com",
    projectId: "chat-533d9",
    storageBucket: "chat-533d9.appspot.com",
    messagingSenderId: "179278512418",
    appId: "1:179278512418:web:49c64dcbaf7e11f98fa57b",
    measurementId: "G-6GKCRHGK9T"
});

export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;
