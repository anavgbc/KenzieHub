import { Button } from "./style.js";
import { useHistory } from "react-router-dom";

const ButtonReturn = ({ children, setAuthenticated }) => {
  const history = useHistory();

  const backToLogin = () => {
    history.push("/");
    localStorage.clear();
    setAuthenticated(false);
  };

  return (
    <>
      <Button onClick={() => backToLogin()}>{children}</Button>
    </>
  );
};
export default ButtonReturn;
