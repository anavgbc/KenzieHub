import Input from "../inputModel";
import { FiMail, FiEye, FiUser, FiPhone, FiEdit2 } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { FormContainer } from "./style";
import Button from "../button";
import Select from "../selectRegister";
import { useContext } from "react";
import {
  IOnSubmitRegisterProps,
  UserContext,
} from "../../Providers/userContext/UserContext";
const Form = (): JSX.Element => {
  const { isAuthenticated, inputValue, setInputValue, onSubmitRegister } =
    useContext(UserContext);

  const history = useHistory();

  isAuthenticated && history.push("/Home");

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Senha inválida"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não coincidem"),
    name: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório").min(10),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOnSubmitRegisterProps>({
    resolver: yupResolver(schema),
  });

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitRegister)}>
      <Input
        icon={FiUser}
        type="text"
        identify="name"
        title="Nome"
        placeholder="Digite aqui seu nome"
        {...register("name")}
        error={errors.name?.message}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Input
        icon={FiMail}
        type="email"
        identify="email"
        title="Email"
        placeholder="Digite aqui seu email"
        {...register("email")}
        error={errors.email?.message}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Input
        icon={FiEye}
        type="password"
        identify="password"
        title="Senha"
        placeholder="Digite aqui sua senha"
        {...register("password")}
        error={errors.password?.message}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Input
        icon={FiEye}
        type="password"
        identify="confirmPassword"
        title="Confirmar Senha"
        placeholder="Confirme sua senha"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Input
        icon={FiEdit2}
        type="text"
        identify="bio"
        title="Bio"
        placeholder="Fale sobre você"
        {...register("bio")}
        error={errors.bio?.message}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Input
        icon={FiPhone}
        type="text"
        identify="contact"
        title="Contato"
        placeholder="Opção de contato"
        {...register("contact")}
        error={errors.contact?.message}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Select
        identify="course_module"
        error={errors.course_module?.message}
        {...register("course_module")}
        title="Selecione o módulo"
        titleThree="Terceiro Módulo"
        titleTwo="Segundo Módulo"
        titleOne="Primeiro Módulo"
      />
      <Button disabled={inputValue !== "" ? false : true} type="submit">
        Cadastre-se
      </Button>
    </FormContainer>
  );
};

export default Form;
