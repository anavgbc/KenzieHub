import { Container } from "./style";
import Input from "../inputModel";
import Select from "../selectRegister";
import Button from "../button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { TechContext } from "../../Providers/TechContext";
import { useContext } from "react";

const ModalEdit = () => {
  const { techSelected } = useContext(TechContext);

  const schema = yup.object().shape({
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <form>
        <Input
          value={techSelected[0].title}
          disabled={true}
          type="text"
          title="Nome"
          name="title"
          register={register}
          error=""
        />
        <Select
          value={techSelected[0].status}
          name="status"
          title="Selecionar Status"
          error={errors.status?.modal}
          register={register}
          titleThree="Avançado"
          titleTwo="Intermediário"
          titleOne="Iniciante"
        />
        <Button type="submit">Salvar alterações</Button>
        {/* <Button
          type="button"
          grayColor
          onClick={() => deleteTech(techSelected.id)}
        >
          Excluir
        </Button> */}
      </form>
    </Container>
  );
};
export default ModalEdit;
