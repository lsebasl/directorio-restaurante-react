import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyCGLapXQlgsZF_iH616e8NrdFvIFc_O6nE",
    authDomain: "directorio-restaurantes.firebaseapp.com",
    projectId: "directorio-restaurantes",
    storageBucket: "directorio-restaurantes.appspot.com",
    messagingSenderId: "208826810268",
    appId: "1:208826810268:web:2c980fdc9f0b38357cd259"
};

const app = initializeApp(firebaseConfig);

const FirebaseFirestore = getFirestore(app);

export {
    FirebaseFirestore

};