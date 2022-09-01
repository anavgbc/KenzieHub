import { useHistory } from "react-router-dom";
import { ButtonSubmit } from "./style";

const Button = ({ children, grayColor, redirect, disabled, size, ...rest }) => {
  const history = useHistory();

  const redirectTo = () => {
    redirect && history.push("/Register");
  };

  return (
    <>
      <ButtonSubmit
        disabled={disabled}
        onClick={() => redirectTo()}
        grayColor={grayColor}
        size={size}
        {...rest}
      >
        {children}
      </ButtonSubmit>
    </>
  );
};

export default Button;
