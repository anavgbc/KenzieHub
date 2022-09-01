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
  const [isLoading, setIsLoading] = useState(false);

  const getTechs = () => {
    api
      .get("/profile")
      .then((res) => {
        setTechs(res.data.techs);
        setIsLoading(false);
      })
      .catch((_) => localStorage.clear());
  };

  const deleteTech = (id) => {
    api
      .delete(`/users/techs/${id}`)
      .then((_) => toast.success("Tecnologia removida!"))
      .catch((_) => toast.error("Ops! Algo deu errado"));
    getTechs();
    setIsOpenModalDelete(false);
  };

  const AddNewTech = (data) => {
    api
      .post("/users/techs", data)
      .then((_) => toast.success("Tecnologia adicionada!"))
      .catch((_) => toast.error("Ops! Algo deu errado"));
    getTechs();
    setIsOpenModalAdd(false);
  };

  useEffect(() => {
    setIsLoading(true);
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
    getTechs();
  }, []);

  const submitChanges = (data) => {
    const status = { status: data.status };
    const id = techSelected.id;

    api
      .put(`/users/techs/${id}`, status)
      .then((_) => toast.success("Tecnologia atualizada!"))
      .catch((_) => toast.error("Ops! Algo deu errado"));
    getTechs();
    setIsOpenModalEdit(false);
  };

  useEffect(() => {}, [techs]);

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
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
