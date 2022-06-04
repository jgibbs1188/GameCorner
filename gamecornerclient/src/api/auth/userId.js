import firebase from "firebase/compat/app";

const GetUserById = () => firebase.auth().currentUser?.uid;

export default GetUserById;
