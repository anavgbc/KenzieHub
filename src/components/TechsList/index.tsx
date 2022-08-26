import { Tech } from "./style";
import { FaTrash } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { ITech, TechContext } from "../../Providers/TechContext";
import { useContext } from "react";

type IListProps = {
  tech: ITech;
};

const List = ({ tech }: IListProps) => {
  const { setIsOpenModalEdit, setIsOpenModalDelete, SetTechSelected } =
    useContext(TechContext);
  return (
    <Tech>
      <div>
        <p>{tech.title}</p>
      </div>
      <div className="list-info">
        <p>{tech.status}</p>
        <button>
          <AiOutlineEdit
            size={12}
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
          <FaTrash size={12} />
        </button>
      </div>
    </Tech>
  );
};
export default List;
