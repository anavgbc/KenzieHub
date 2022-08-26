import { FieldValues, UseFormRegister } from "react-hook-form";
import { SelectForm, ContainerSelect } from "./style";
import { forwardRef } from "react";

interface ISelectProps {
  identify: string;
  title: string;
  error?: string;
  titleOne: string;
  titleTwo: string;
  titleThree: string;
  register?: UseFormRegister<FieldValues>;
  rest?: any;
}

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  (
    {
      identify,
      title,
      error,
      titleOne,
      titleTwo,
      titleThree,
      ...rest
    }: ISelectProps,
    ref
  ): JSX.Element => {
    return (
      <ContainerSelect>
        <label htmlFor={identify}>{title}</label>
        <span>{error && `- ${error}`}</span>

        <SelectForm id={identify} ref={ref} {...rest}>
          <option value={titleOne}>{titleOne}</option>
          <option value={titleTwo}>{titleTwo}</option>
          <option value={titleThree}>{titleThree}</option>
        </SelectForm>
      </ContainerSelect>
    );
  }
);
export default Select;
