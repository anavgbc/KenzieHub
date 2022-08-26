import { createContext, ReactNode, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { ITech } from "../TechContext";

export interface IData {
  email?: string;
  password?: string;
}

export interface IOnSubmitRegisterProps {
  name: string;
  email: string;
  password: string;
  bio: string;
  contact: string;
  course_module: string;
  confirmPassword: string;
}

interface IUser {
  avatar_url: string | null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: ITech[];
  updated_at: string;
  works: [];
}

interface ILoginResponse {
  token: string;
  user: IUser;
}

interface IUserContext {
  isAuthenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (data: IData) => void;
  backToLogin: () => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmitRegister: ({
    email,
    name,
    password,
    bio,
    contact,
    course_module,
  }: IOnSubmitRegisterProps) => void;
  user: IUser;
  token: object | string;
}
export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const history = useHistory();

  const user: IUser = JSON.parse(
    localStorage.getItem("@KenzieHub:user") || "{}"
  );
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token") || "{}");

  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmit = (data: IData) => {
    api
      .post<ILoginResponse>("/sessions", data)
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
  }: IOnSubmitRegisterProps) => {
    const user = { name, email, password, bio, contact, course_module };

    api
      .post<IUser>("/users", user)
      .then((res) => {
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
