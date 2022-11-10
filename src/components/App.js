import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { DataProvider } from "../hooks/data-context";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
    console.log(authService.currentUser);
  };
  return (
    <>
      {init ? (
      <DataProvider>
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      </DataProvider>
      ) : (
        "loading..."
      )}
    </>
  );
}

export default App;