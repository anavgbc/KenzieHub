import { InputForm, Container } from "./style";
import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { forwardRef } from "react";

interface IINputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  identify: string;
  title: string;
  error?: boolean | string;
  icon?: IconType | string;
  rest?: any;
  disabled?: boolean;
  isErrored?: boolean;
}

const Input = forwardRef<HTMLInputElement, IINputProps>(
  ({ type, identify, title, error, icon: Icon, ...rest }: IINputProps, ref) => {
    return (
      <Container>
        <label htmlFor={identify}>{title}</label>
        <span>{error && `- ${error}`}</span>
        <InputForm isErrored={!!error}>
          {Icon && <Icon />}
          <input type={type} id={identify} ref={ref} {...rest} />
        </InputForm>
      </Container>
    );
  }
);
export default Input;
