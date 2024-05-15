// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, onValue, child, get } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCYqvtDXsN5wzHTWN9zH21c5bCpLwPjoEI",
authDomain: "wavelength-6ce6f.firebaseapp.com",
projectId: "wavelength-6ce6f",
storageBucket: "wavelength-6ce6f.appspot.com",
messagingSenderId: "865490341692",
appId: "1:865490341692:web:f0252fdeffd496413c9839"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { database, ref, set, onValue, child, get };