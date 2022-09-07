import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "firebase/auth";


export const loginRequest = (email, password) => {
    const auth = getAuth()
   return signInWithEmailAndPassword(getAuth(), email, password)

}
export const registerRequest = (email, password) => {
    const auth = getAuth()
   
    return createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     const user = userCredential.user
    // }).catch((error) => {
    //     console.log(error.message);
    // })

}