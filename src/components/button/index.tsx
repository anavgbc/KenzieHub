import { ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { ButtonSubmit } from "./style";

interface IButtonProps {
  children: ReactNode;
  grayColor?: boolean;
  redirect?: boolean;
  disabled?: boolean;
  size?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({
  children,
  grayColor,
  redirect,
  disabled,
  size,
  ...rest
}: IButtonProps) => {
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
