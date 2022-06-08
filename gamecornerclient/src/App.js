import React, { useState, useEffect } from "react";
import auth from "./api/auth/apiKeys"
import checkUserCreatedInDB from "./api/auth/checkUserCreatedInDB";
import "./App.css";
import Navbar from "./Components/Navbar";
import Routing from "./Routing";
import Login from "./Views/Login";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(async (response) => {
            if (response) {
                const userObj = {
                    uid: response.uid,
                    fullName: response.displayName,
                    profilePic: response.photoURL,
                    username: response.email.split("@")[0],
                    token: response.accessToken, //you can save the token in an object if you want
                };
                setUser(userObj);
                sessionStorage.setItem("token", response.accessToken);
                console.log(userObj.uid);
                checkUserCreatedInDB(response.accessToken);
            } else {
                setUser(false);

                //don't forget to clear the token if using sessionStorage!
                sessionStorage.removeItem("token");
            }
        });
    }, []);

    return (
        <div>
            {user ? (
                <>
                    <Navbar />
                    <Routing />
                </>
            ) : (
                <>
                    <Login user={user} />
                </>
            )}
        </div>
    );
}

export default App;