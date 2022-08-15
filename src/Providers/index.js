import { UserContextProvider } from "./userContext/UserContext";
import { TechContextProvider } from "./TechContext";

const Providers = ({ children }) => {
  return (
    <UserContextProvider>
      <TechContextProvider>{children}</TechContextProvider>
    </UserContextProvider>
  );
};

export default Providers;
