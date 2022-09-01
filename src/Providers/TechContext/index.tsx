import { createContext, ReactNode, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

type UserId = {
  id: string;
};

export interface ITech {
  title: string;
  id: string;
  status: string;
  updated_at: string;
  created_at: string;
  user?: UserId;
}
export interface Teste {
  title?: string;
  status?: string;
  name?: string;
  email?: string;
  password?: string;
  bio?: string;
  contact?: string;
  course_module?: string;
  confirmPassword?: string;
}

export type ITechAdded = Omit<ITech, "id" | "updated_at" | "created_at">;

type IAnimation = {
  opacity?: number;
  scale?: number;
  duration?: number;
};

interface IBoxAnimation {
  initial: IAnimation;
  animate: IAnimation;
  exit: IAnimation;
  transition: IAnimation;
}

interface ITechContext {
  techs: ITech[];
  setTechs: React.Dispatch<React.SetStateAction<ITech[]>>;
  techSelected: ITech;
  SetTechSelected: React.Dispatch<React.SetStateAction<ITech>>;
  isOpenModalEdit: boolean;
  setIsOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  deleteTech: (id: String) => void;
  AddNewTech: (data: ITechAdded) => void;
  isOpenModalAdd: boolean;
  setIsOpenModalAdd: React.Dispatch<React.SetStateAction<boolean>>;
  submitChanges: (data: ITechAdded) => void;
  isOpenModalDelete: boolean;
  setIsOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  boxAnimation: IBoxAnimation;
  techActual: ITech;
}

export const TechContext = createContext<ITechContext>({} as ITechContext);

export const TechContextProvider = ({ children }: { children: ReactNode }) => {
  const [techs, setTechs] = useState<ITech[]>([]);
  const [techSelected, SetTechSelected] = useState<ITech>({} as ITech);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false);
  const [isOpenModalAdd, setIsOpenModalAdd] = useState<boolean>(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false);
  const [techActual, setTechActual] = useState<ITech>({} as ITech);

  const boxAnimation: IBoxAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
    transition: { duration: 0.8 },
  };

  const deleteTech = (id: String): void => {
    api
      .delete(`/users/techs/${id}`)
      .then((_) => {
        setTechActual(techSelected);
      })
      .then((_) => toast.success("Tecnologia removida!"))
      .catch((_) => toast.error("Ops! Algo deu errado"));
    setIsOpenModalDelete(false);
  };

  const AddNewTech = (data: ITechAdded): void => {
    api
      .post<ITech>("/users/techs", data)
      .then((res) => {
        setTechActual(res.data);
      })
      .then((_) => toast.success("Tecnologia adicionada!"))
      .catch((err) =>
        err.response.status === 401
          ? toast.error("Tecnologia já existente!")
          : toast.error("Ops! Algo deu errado")
      );
    setIsOpenModalAdd(false);
  };

  const submitChanges = (data: ITechAdded): void => {
    const status = { status: data.status };
    const id = techSelected.id;

    api
      .put<ITech>(`/users/techs/${id}`, status)
      .then((res) => {
        setTechActual(techSelected);
      })
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
