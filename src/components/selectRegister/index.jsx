import { SelectForm, ContainerSelect } from "./style";

const Select = ({ name, register, error }) => {
  return (
    <ContainerSelect>
      <label htmlFor={name}>Selecionar Módulo</label>
      <span>{error && `- ${error}`}</span>

      <SelectForm id={name} {...register(name)}>
        <option value="Primeiro Módulo">Primeiro Módulo</option>
        <option value="Segundo Módulo">Segundo Módulo</option>
        <option value="Terceiro Módulo">Terceiro Módulo</option>
      </SelectForm>
    </ContainerSelect>
  );
};
export default Select;
