import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechContextProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);
  const [techSelected, SetTechSelected] = useState("");
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

  const deleteTech = (id) => {
    api
      .delete(`/users/techs/${id}`)
      .then((_) => toast.success("Tecnologia removida!"))
      .catch((_) => toast.error("Ops! Algo deu errado"));
    console.log(id);
  };

  const AddNewTech = (data) => {
    api
      .post("/users/techs", data)
      .then((_) => toast.success("Tecnologia adicionada!"))
      .catch((_) => toast.error("Ops! Algo deu errado"));
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
    api
      .get("/profile")
      .then((res) => {
        setTechs(res.data.techs);
      })
      .catch((_) => localStorage.clear());
  }, []);

  const submitChanges = (data) => {
    const status = { status: data.status };
    const id = techSelected.id;

    api
      .put(`/users/techs/${id}`, status)
      .then((_) => toast.success("Tecnologia atualizada!"))
      .catch((_) => toast.error("Ops! Algo deu errado"));
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
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
