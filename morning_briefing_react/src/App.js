import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Briefing from "./components/Briefing";
import SignIn from "./components/SignIn";
import Nav from "../src/components/Nav";

const App = () => {
  const adminUser = {
    email: "test@test.com",
    password: "test123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  const [isLogIn, setIsLogin] = useState(false);

  const logIn = (e) => {
    e.preventDefault();
    console.log("I'm here");
    setIsLogin(true);

  
    // setIsLogin(true);
  }

  const logout = () => {
    setIsLogin(false);
  }

  return (
    <div> 
      <BrowserRouter>
        <Nav loginBol={isLogIn} logout={logout}/>
        <Switch>
          <Route exact path="/" render={() => (
            <div>
              {isLogIn ? <Redirect to="/briefing" /> : <SignIn logIn={logIn}/>}
            </div>
          )}/>
        </Switch>
        <Switch>
          <Route exact path="/briefing" render={() => (
            <div style={{backgroundImage: `url("img/tt3.jpg")`}}>
                <Briefing />
            </div>

          )}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
