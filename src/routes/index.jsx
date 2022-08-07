import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    token && setAuthenticated(true);
  }, [isAuthenticated]);

  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Login
            isAuthenticated={isAuthenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/Register">
          <Register isAuthenticated={isAuthenticated} />
        </Route>
        <Route path="/Home">
          <Home
            isAuthenticated={isAuthenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};
export default Routes;
