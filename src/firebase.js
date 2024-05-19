import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, onValue, child, get } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// API Information from .env file
const api_key = process.env.REACT_APP_API_KEY;
const auth_domain = process.env.REACT_APP_AUTH_DOMAIN;
const project_id = process.env.REACT_APP_PROJECT_ID;
const storage_bucket = process.env.REACT_APP_STORAGE_BUCKET;
const messaging_sender_id = process.env.REACT_APP_MESSAGING_SENDER_ID;
const app_id = process.env.REACT_APP_APP_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: api_key,
authDomain: auth_domain,
projectId: project_id,
storageBucket: storage_bucket,
messagingSenderId: messaging_sender_id,
appId: app_id
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { database, ref, set, onValue, child, get };