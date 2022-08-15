import { TechContext } from "../../Providers/TechContext";
import { useContext } from "react";
import List from "../TechsList";
import { ListContainer, ListHeader } from "./style";
import { MdOutlineAdd } from "react-icons/md";

const TechListContainer = ({ setIsOpenModal }) => {
  const { techs } = useContext(TechContext);

  return (
    <>
      <ListContainer>
        <ListHeader>
          <p>Tecnologias</p>
          <button onClick={() => setIsOpenModal(true)}>
            <MdOutlineAdd size={20} />
          </button>
        </ListHeader>
        <div className="list-container">
          {techs.map((tech) => (
            <List tech={tech} key={tech.id} />
          ))}
        </div>
      </ListContainer>
    </>
  );
};
export default TechListContainer;
