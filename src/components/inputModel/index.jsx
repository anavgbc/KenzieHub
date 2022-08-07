import { InputForm, Container } from "./style";

const Input = ({ type, name, title, register, error, icon: Icon, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{title}</label>
      <span>{error && `- ${error}`}</span>
      <InputForm isErrored={!!error}>
        {Icon && <Icon />}
        <input type={type} id={name} {...register(name)} {...rest} />
      </InputForm>
    </Container>
  );
};
export default Input;
