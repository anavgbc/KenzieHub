import { useHistory } from "react-router-dom";
import { ButtonSubmit } from "./style";

const Button = ({ children, grayColor, disabled }) => {
  const history = useHistory();

  const redirectTo = () => {
    grayColor && history.push("/Register");
  };

  return (
    <>
      <ButtonSubmit
        disabled={disabled}
        onClick={() => redirectTo()}
        grayColor={grayColor}
      >
        {children}
      </ButtonSubmit>
    </>
  );
};

export default Button;
