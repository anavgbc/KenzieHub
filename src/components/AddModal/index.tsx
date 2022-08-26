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

const AddModal = (): JSX.Element => {
  const { AddNewTech, setIsOpenModalAdd, boxAnimation } =
    useContext(TechContext);

  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Campo obrigatório")
      .max(10, "Máximo de 10 caracteres"),
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
          <p>Cadastrar Tecnologia</p>
          <button onClick={() => setIsOpenModalAdd(false)}>
            <GrClose size={15} />
          </button>
        </div>
        <form onSubmit={handleSubmit(AddNewTech)} className="modal-main">
          <Input
            icon=""
            type="text"
            title="Nome"
            identify="title"
            placeholder="TypeScript"
            {...register("title")}
            error={errors.title?.message}
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
          <Button type="submit">Cadastrar Tecnologia</Button>
        </form>
      </motion.div>
    </Container>
  );
};
export default AddModal;
