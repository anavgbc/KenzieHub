import { createContext, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechContextProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);
  const [techSelected, SetTechSelected] = useState("");
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [techActual, setTechActual] = useState("");

  const boxAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5, transition: { durantion: 0.8 } },
    transition: { durantion: 0.8 },
  };

  const deleteTech = (id) => {
    api
      .delete(`/users/techs/${id}`)
      .then((res) => setTechActual(techSelected))
      .then((_) => toast.success("Tecnologia removida!"))
      .catch((_) => toast.error("Ops! Algo deu errado"));
    setIsOpenModalDelete(false);
  };

  const AddNewTech = (data) => {
    api
      .post("/users/techs", data)
      .then((res) => setTechActual(res.data))
      .then((_) => toast.success("Tecnologia adicionada!"))
      .catch((err) =>
        err.response.status === 401
          ? toast.error("Tecnologia já existente!")
          : toast.error("Ops! Algo deu errado")
      );
    setIsOpenModalAdd(false);
  };

  const submitChanges = (data) => {
    const status = { status: data.status };
    const id = techSelected.id;

    api
      .put(`/users/techs/${id}`, status)
      .then((res) => setTechActual(techSelected))
      .then((_) => toast.success("Tecnologia atualizada!"))
      .catch((_) => toast.error("Ops! Algo deu errado"));
    setIsOpenModalEdit(false);
  };

  return (
    <TechContext.Provider
      value={{
        techs,
        setTechs,
        techSelected,
        SetTechSelected,
        isOpenModalEdit,
        setIsOpenModalEdit,
        deleteTech,
        AddNewTech,
        isOpenModalAdd,
        setIsOpenModalAdd,
        submitChanges,
        isOpenModalDelete,
        setIsOpenModalDelete,
        boxAnimation,
        techActual,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
