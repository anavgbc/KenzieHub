import { Container } from "./style";
import Button from "../button";
import { motion } from "framer-motion";
import { TechContext } from "../../Providers/TechContext";
import { useContext } from "react";
import { api } from "../../services/api";

const ModalDelete = () => {
  const { setIsOpenModalDelete, deleteTech, techSelected } =
    useContext(TechContext);

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
          <button onClick={() => setIsOpenModalDelete(false)}>x</button>
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
