import { getAuth } from "@firebase/auth";

const auth = getAuth();
const getCurrentUsersUid = () => auth.currentUser?.uid;

export default getCurrentUsersUid;