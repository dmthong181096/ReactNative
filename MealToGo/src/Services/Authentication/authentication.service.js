import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const logiRequest = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user
    }).catch((e) => {
        console.log(e);
    })

}