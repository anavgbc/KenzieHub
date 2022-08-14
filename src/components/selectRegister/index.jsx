import { SelectForm, ContainerSelect } from "./style";

const Select = ({
  name,
  title,
  register,
  error,
  titleOne,
  titleTwo,
  titleThree,
  ...rest
}) => {
  return (
    <ContainerSelect>
      <label htmlFor={name}>{title}</label>
      <span>{error && `- ${error}`}</span>

      <SelectForm id={name} {...register(name)} {...rest}>
        <option value={titleOne}>{titleOne}</option>
        <option value={titleTwo}>{titleTwo}</option>
        <option value={titleThree}>{titleThree}</option>
      </SelectForm>
    </ContainerSelect>
  );
};
export default Select;
