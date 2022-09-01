import { TechContext } from "../../Providers/TechContext";
import { useContext } from "react";
import List from "../TechsList";
import { ListContainer } from "./style";
import { motion } from "framer-motion";

const TechListContainer = () => {
  const { techs } = useContext(TechContext);

  return (
    <>
      <ListContainer>
        <motion.div
          className="list-container"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
          transition={{ durantion: 0.2 }}
        >
          {techs?.map((tech) => (
            <List tech={tech} key={tech.id} />
          ))}
        </motion.div>
      </ListContainer>
    </>
  );
};
export default TechListContainer;
