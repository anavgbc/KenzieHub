import { Container } from "./style";
import Button from "../button";
import { motion } from "framer-motion";
import { TechContext } from "../../Providers/TechContext";
import { useContext } from "react";
import { GrClose } from "react-icons/gr";

const ModalDelete = (): JSX.Element => {
  const { setIsOpenModalDelete, deleteTech, techSelected, boxAnimation } =
    useContext(TechContext);

  return (
    <Container>
      <motion.div className="modal-box" {...boxAnimation}>
        <div className="modal-header">
          <p>Tecnologia Detalhes</p>
          <button onClick={() => setIsOpenModalDelete(false)}>
            <GrClose size={15} />
          </button>
        </div>
        <div className="modal-main">
          <h3>Excluir tecnologia?</h3>
          <span>Essa ação não poderá ser desfeita</span>
          <div>
            <Button onClick={() => deleteTech(techSelected.id)} size={50}>
              Sim, excluir
            </Button>
            <Button
              onClick={() => setIsOpenModalDelete(false)}
              grayColor
              size={40}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};
export default ModalDelete;
