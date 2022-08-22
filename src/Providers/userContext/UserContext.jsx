import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

  const [isAuthenticated, setAuthenticated] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        localStorage.setItem(
          "@KenzieHub:token",
          JSON.stringify(response.data.token)
        );

        localStorage.setItem(
          "@KenzieHub:user",
          JSON.stringify(response.data.user)
        );

        localStorage.setItem(
          "@KenzieHub:userID",
          JSON.stringify(response.data.user.id)
        );
        setAuthenticated(true);

        return history.push("/Home");
      })
      .catch((_) => toast.error("Ops! Algo deu errado"));
  };

  const onSubmitRegister = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const user = { name, email, password, bio, contact, course_module };

    api
      .post("/users", user)
      .then((_) => {
        toast.success("Conta criada com sucesso!");

        return history.push("/");
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };

  const backToLogin = () => {
    history.push("/");
    localStorage.clear();
    setAuthenticated(false);
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        onSubmit,
        backToLogin,
        inputValue,
        setInputValue,
        onSubmitRegister,
        user,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
