import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyCBkfzUP-_bArBIS6f4K9u04ujPWvjzrcw",
    authDomain: "firevuechat-fca64.firebaseapp.com",
    databaseURL: "https://firevuechat-fca64-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "firevuechat-fca64",
    storageBucket: "firevuechat-fca64.appspot.com",
    messagingSenderId: "962398045538",
    appId: "1:962398045538:web:0393a34bebb5549a3f183b"
}

const db = firebase.initializeApp(config);

export default db;

