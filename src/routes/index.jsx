import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { AnimatePresence } from "framer-motion";
import { UserContext } from "../Providers/userContext/UserContext";
const Routes = () => {
  const { isAuthenticated, setAuthenticated } = useContext(UserContext);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    token ? setAuthenticated(true) : setAuthenticated(false);
  }, [isAuthenticated]);

  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};
export default Routes;
