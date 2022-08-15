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
import { GrClose } from "react-icons/gr";

const ModalEdit = () => {
  const { techSelected, setIsOpenModalEdit, submitChanges } =
    useContext(TechContext);

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
      <motion.div
        className="modal-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ durantion: 0.8 }}
      >
        <div className="modal-header">
          <p>Tecnologia Detalhes</p>
          <button onClick={() => setIsOpenModalEdit(false)}>
            <GrClose size={15} />
          </button>
        </div>
        <form onSubmit={handleSubmit(submitChanges)} className="modal-main">
          <Input
            placeholder={techSelected.title}
            disabled={true}
            type="text"
            title="Nome"
            name="title"
            register={register}
            error=""
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
          <Button type="submit">Salvar alterações</Button>
        </form>
      </motion.div>
    </Container>
  );
};
export default ModalEdit;
