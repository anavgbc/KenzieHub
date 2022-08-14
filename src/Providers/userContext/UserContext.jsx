import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const history = useHistory();

  const [isAuthenticated, setAuthenticated] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

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
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@KenzieHub:token");
      console.log(token);

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get("/profile");

          console.log("busquei usuario", data);
        } catch (error) {
          console.error("meu erro:", error);
        }
      }
    }
    loadUser();
  }, []);

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
