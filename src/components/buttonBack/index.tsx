import { Button } from "./style";
import { UserContext } from "../../Providers/userContext/UserContext";
import { ReactNode, useContext } from "react";

interface IButtonReturnProps {
  children: ReactNode;
}

const ButtonReturn = ({ children }: IButtonReturnProps): JSX.Element => {
  const { backToLogin } = useContext(UserContext);

  return <Button onClick={() => backToLogin()}>{children}</Button>;
};
export default ButtonReturn;
