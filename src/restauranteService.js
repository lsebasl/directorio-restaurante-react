import { collection, doc, setDoc, getDocs } from 'firebase/firestore/lite'
import { FirebaseFirestore } from './firebase'

const crearRestaurante = async (restaurante) => {
    const nuevoDoc = doc(collection(FirebaseFirestore, '/restaurantes'));
    await setDoc(nuevoDoc, restaurante);
    console.log('restaurante creado');
}

const listarRestaurantes = async () => {
    const restauranteRef = collection(FirebaseFirestore, '/restaurantes');

    const docs = await getDocs(restauranteRef);
    const restaurantes = [];

    docs.forEach(document => {
        restaurantes.push({id: document.id, 
            nombre: document.data().nombre,
            descripcion: document.data().descripcion,
            direccion: document.data().direccion,
            url: document.data().url
        });
    });

    return restaurantes;
}

export {
    crearRestaurante,
    listarRestaurantes
}