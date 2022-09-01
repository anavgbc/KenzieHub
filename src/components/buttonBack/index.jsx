import { Button } from "./style.js";
import { UserContext } from "../../Providers/userContext/UserContext";
import { useContext } from "react";

const ButtonReturn = ({ children }) => {
  const { backToLogin } = useContext(UserContext);

  return (
    <>
      <Button onClick={() => backToLogin()}>{children}</Button>
    </>
  );
};
export default ButtonReturn;
