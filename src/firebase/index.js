import firebase from 'firebase/app'
import 'firebase/firestore';

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyAD3_gio5J57MYQoxGWtUr3-Saue5Fdlt8",
        authDomain: "coderreact-1f8c6.firebaseapp.com",
        projectId: "coderreact-1f8c6",
        storageBucket: "coderreact-1f8c6.appspot.com",
        messagingSenderId: "985125306289",
        appId: "1:985125306289:web:5c9eb127ce577830fb8790"
      }
)

export const getFirebase = () => {
    return app
}

//para llamar la base de datos
export const grtFirestore = () => {
    return firebase.firestore
}