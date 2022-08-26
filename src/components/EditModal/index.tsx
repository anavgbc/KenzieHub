import { Container } from "./style";
import Input from "../inputModel";
import Select from "../selectRegister";
import Button from "../button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { ITechAdded, TechContext } from "../../Providers/TechContext";
import { useContext } from "react";
import { GrClose } from "react-icons/gr";

const ModalEdit = (): JSX.Element => {
  const { techSelected, setIsOpenModalEdit, submitChanges, boxAnimation } =
    useContext(TechContext);

  const schema = yup.object().shape({
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechAdded>({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <motion.div className="modal-box" {...boxAnimation}>
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
            identify="title"
            error=""
            {...register("title")}
          />
          <Select
            identify="status"
            title="Selecionar Status"
            error={errors.status?.message}
            {...register("status")}
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
