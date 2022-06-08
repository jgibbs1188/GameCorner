import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import auth from "./apiKeys";

const signInUser = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
};
const signOutUser = () =>
    new Promise((resolve, reject) => {
        auth.signOut().then(resolve).catch(reject);
    });

export { signInUser, signOutUser }