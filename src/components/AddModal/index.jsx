import { Container } from "./style";
import Input from "../inputModel";
import Select from "../selectRegister";
import Button from "../button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { UserContext } from "../../Providers/userContext/UserContext";
import { TechContext } from "../../Providers/TechContext";
import { useContext } from "react";

const AddModal = ({ setIsOpenModalAdd }) => {
  const { user } = useContext(UserContext);
  const { AddNewTech } = useContext(TechContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
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
      <motion.div
        className="modal-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ durantion: 0.8 }}
      >
        <div className="modal-header">
          <p>Cadastrar Tecnologia</p>
          <button onClick={() => setIsOpenModalAdd(false)}>x</button>
        </div>
        <form onSubmit={handleSubmit(AddNewTech)} className="modal-main">
          <Input
            icon=""
            type="text"
            title="Nome"
            name="title"
            placeholder="TypeScript"
            register={register}
            error={errors.title?.message}
          />
          <Select
            name="status"
            title="Selecionar Status"
            error={errors.status?.modal}
            register={register}
            titleThree="Avançado"
            titleTwo="Intermediário"
            titleOne="Iniciante"
          />
          <Button type="submit">Cadastrar Tecnologia</Button>
        </form>
      </motion.div>
    </Container>
  );
};
export default AddModal;
