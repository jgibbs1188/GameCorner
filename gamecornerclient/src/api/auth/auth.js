//import { firebase } from 'firebase/app';

const signInUser = () => {
    //const provider = new firebase.auth.GoogleAuthProvider();
    //firebase.auth().signInWithPopup(provider);
    console.log("You tried to Sign In!")
};
//const signOutUser = () => new Promise((resolve, reject) => {
//    firebase.auth().signOut().then(resolve).catch(reject);
//});

const signOutUser = () => {
    console.log("You tried to Sign Out!")
};

export { signInUser, signOutUser };

