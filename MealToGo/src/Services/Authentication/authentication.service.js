import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "firebase/auth";


export const loginRequest = (email, password) => {
    const auth = getAuth()
   
    signInWithEmailAndPassword(getAuth(), email, password)
    // .then((userCredential) => {
    //     const user = userCredential.user
    //     console.log("LOGIN SUCCESS",user.email)
    // }).catch((e) => {
    //     console.log("Service",e.message.toString());
    // })

}
export const registerRequest = (email, password) => {
    const auth = getAuth()
   
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user
        console.log("REGISTER SUCCESS",user.email)
    }).catch((error) => {
        console.log(error.message);
    })

}