import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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

  const logIn = (details) => {
    console.log(details);
  }

  const logout = () => {
    console.log("Logout");
  }

  return (
    <div> 
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={SignIn}/>
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
