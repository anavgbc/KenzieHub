import { Tech } from "./style";
import { FaTrash } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { TechContext } from "../../Providers/TechContext";
import { useContext } from "react";

const List = ({ tech }) => {
  const {
    editTech,
    setIsOpenModalEdit,
    setIsOpenModalDelete,
    SetTechSelected,
  } = useContext(TechContext);
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
                SetTechSelected(tech);
                setIsOpenModalEdit(true);
              }}
            />
          </button>
          <button
            id={tech.id}
            onClick={() => {
              setIsOpenModalDelete(true);
              SetTechSelected(tech);
            }}
          >
            <FaTrash size={10} />
          </button>
        </div>
      </div>
    </Tech>
  );
};
export default List;
