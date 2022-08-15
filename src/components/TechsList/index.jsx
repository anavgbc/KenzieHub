import { Tech } from "./style";
import { FaTrash } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { TechContext } from "../../Providers/TechContext";
import { useContext } from "react";

const List = ({ tech }) => {
  const { editTech, setIsOpenModalEdit, deleteTech } = useContext(TechContext);
  return (
    <Tech>
      <div>
        <p>{tech.title}</p>
      </div>
      <div className="list-info">
        <p>{tech.status}</p>
        <div>
          <button>
            <AiOutlineEdit
              size={10}
              onClick={() => {
                editTech(tech.id);
                setIsOpenModalEdit(true);
              }}
            />
          </button>
          <button onClick={() => deleteTech(tech.id)}>
            <FaTrash size={10} />
          </button>
        </div>
      </div>
    </Tech>
  );
};
export default List;
