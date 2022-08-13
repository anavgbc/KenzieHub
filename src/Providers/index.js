import { UserContextProvider } from "./userContext/UserContext";

const Providers = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default Providers;
