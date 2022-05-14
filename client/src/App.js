import React, { useState } from "react";
import { isAuthenticated } from "./utils/auth";
import Main from "./container/Main";
import Login from "./pages/Login";

const App = () => {

  const [auth, setAuth] = useState(isAuthenticated());
  console.log(setAuth)

  return (
    <div className="font-montserrat">
      {auth ?
        <Main />
        :
        <Login />
      }
    </div>
  );
};

export default App;
