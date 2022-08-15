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

  // const editTech = (id) => {
  //   const selected = techs.filter((tech) => tech.id === id);
  //   console.log(selected);
  //   SetTechSelected(selected);
  // };

  const deleteTech = (id) => {
    api
      .delete(`/users/techs/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(id);
  };

  const AddNewTech = (data) => {
    console.log(data);
    api
      .post("/users/techs", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
    api
      .get("/profile")
      .then((res) => setTechs(res.data.techs))
      .catch((err) => console.log(err));
  }, []);

  const submitChanges = (data) => {
    const status = { status: data.status };
    const id = techSelected.id;

    api
      .put(`/users/techs/${id}`, status)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log(status, id);
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
