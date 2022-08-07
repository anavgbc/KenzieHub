import Input from "../inputModel";
import { FiMail, FiEye, FiUser, FiPhone, FiEdit2 } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { api } from "../../services/api.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { FormContainer } from "./style";
import Button from "../button";
import Select from "../selectRegister";
import { useState } from "react";

const Form = ({ isAuthenticated }) => {
  const [inputValue, setInputValue] = useState("");

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
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = ({ name, email, password, bio, contact, course_module }) => {
    const user = { name, email, password, bio, contact, course_module };

    api
      .post("/users", user)
      .then((_) => {
        toast.success("Conta criada com sucesso!");

        return history.push("/");
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };

  isAuthenticated && history.push("/Home");

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        icon={FiUser}
        type="text"
        name="name"
        title="Nome"
        placeholder="Digite aqui seu nome"
        register={register}
        error={errors.name?.message}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Input
        icon={FiMail}
        type="email"
        name="email"
        title="Email"
        placeholder="Digite aqui seu email"
        register={register}
        error={errors.email?.message}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Input
        icon={FiEye}
        type="password"
        name="password"
        title="Senha"
        placeholder="Digite aqui sua senha"
        register={register}
        error={errors.password?.message}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Input
        icon={FiEye}
        type="password"
        name="confirmPassword"
        title="Confirmar Senha"
        placeholder="Confirme sua senha"
        register={register}
        error={errors.confirmPassword?.message}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Input
        icon={FiEdit2}
        type="text"
        name="bio"
        title="Bio"
        placeholder="Fale sobre você"
        register={register}
        error={errors.bio?.message}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Input
        icon={FiPhone}
        type="text"
        name="contact"
        title="Contato"
        placeholder="Opção de contato"
        register={register}
        error={errors.contact?.message}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Select
        name="course_module"
        error={errors.course_module?.message}
        register={register}
      />
      <Button
        disabled={inputValue !== "" ? false : true}
        errors={errors}
        type="submit"
      >
        Cadastre-se
      </Button>
    </FormContainer>
  );
};

export default Form;
