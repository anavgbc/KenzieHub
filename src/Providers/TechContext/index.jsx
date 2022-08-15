import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechContextProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);
  const [techSelected, SetTechSelected] = useState("");
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);

  const editTech = (id) => {
    const selected = techs.filter((tech) => tech.id === id);
    console.log(selected);
    SetTechSelected(selected);
  };

  console.log(techSelected);

  const deleteTech = (id) => {
    api
      .delete(`/users/techs/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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

  //   const submitChanges = (data, id) => {
  //     api
  //       .put(`/users/techs/${id}`, data)
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   };

  return (
    <TechContext.Provider
      value={{
        techs,
        setTechs,
        techSelected,
        SetTechSelected,
        isOpenModalEdit,
        setIsOpenModalEdit,
        editTech,
        deleteTech,
        AddNewTech,
        isOpenModalAdd,
        setIsOpenModalAdd,
        // submitChanges,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
