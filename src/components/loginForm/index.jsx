import Input from "../inputModel";
import { Form } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiMail, FiEye } from "react-icons/fi";
import Button from "../button";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Providers/userContext/UserContext";
import { useContext } from "react";

const FormLogin = () => {
  const { isAuthenticated, onSubmit } = useContext(UserContext);

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Senha inválida"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  isAuthenticated && history.push("/Home");

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        icon={FiMail}
        type="email"
        name="email"
        title="Email"
        placeholder="Digite aqui seu email"
        register={register}
        error={errors.email?.message}
      />

      <Input
        icon={FiEye}
        type="password"
        name="password"
        title="Senha"
        placeholder="Digite aqui sua senha"
        register={register}
        error={errors.password?.message}
      />
      <Button type="submit">Entrar</Button>
      <span>Ainda não possui uma conta?</span>
    </Form>
  );
};
export default FormLogin;
