import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Users from "./component/Users/Users";
import AddUser from "./component/AddUser/AddUser";
import UpdateUser from "./component/UpdateUser/UpdateUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route path="/users/add">
            <AddUser />
          </Route>
          <Route path="/users/update/:id">
            <UpdateUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
