import ButtonReturn from "../../components/buttonBack";
import KenzieHub from "../../components/kenzieHub";
import {
  NavBar,
  Page,
  Header,
  Main,
  ContainerNavBar,
  ContainerHeader,
  HeaderInfo,
  ListHeader,
} from "./style";
import Lottie from "react-lottie";
import animationData from "../../assets/51382-astronaut-light-theme.json";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { UserContext } from "../../Providers/userContext/UserContext";
import { useContext, useEffect, useState } from "react";
import AddModal from "../../components/AddModal";
import ModalEdit from "../../components/EditModal";
import TechListContainer from "../../components/TechListContainer";
import { TechContext } from "../../Providers/TechContext";
import ModalDelete from "../../components/DeleteModal";
import { MdOutlineAdd } from "react-icons/md";
import CircularIndeterminate from "../../components/Loader";
import { api } from "../../services/api";

const Home = (): JSX.Element => {
  const { isAuthenticated, user, token } = useContext(UserContext);
  const {
    techs,
    isOpenModalEdit,
    isOpenModalAdd,
    isOpenModalDelete,
    setIsOpenModalAdd,
    setTechs,
    techActual,
  } = useContext(TechContext);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const history = useHistory();

  !isAuthenticated && history.push("/");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    api
      .get("/profile")
      .then((res) => {
        setIsLoading(false);
        setTechs(res.data.techs);
      })
      .catch((_) => localStorage.clear());
  }, [techActual]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ durantion: 0.9 }}
    >
      <Page>
        {isOpenModalAdd && <AddModal />}
        {isOpenModalEdit && <ModalEdit />}
        {isOpenModalDelete && <ModalDelete />}
        <NavBar>
          <ContainerNavBar>
            <KenzieHub />
            <ButtonReturn>Sair</ButtonReturn>
          </ContainerNavBar>
        </NavBar>
        <Header>
          <ContainerHeader>
            <HeaderInfo>
              <h3>Olá, {user.name}</h3>
              <p>{user.course_module}</p>
            </HeaderInfo>
            <p>{user.bio}</p>
          </ContainerHeader>
        </Header>
        <Main>
          <ListHeader>
            <p>Tecnologias</p>
            <button onClick={() => setIsOpenModalAdd(true)}>
              <MdOutlineAdd size={20} />
            </button>
          </ListHeader>
          {isLoading && <CircularIndeterminate />}

          {!techs.length && !isLoading ? (
            <>
              <h3>Ops, parece que não temos nada aqui...</h3>
              <div>
                <Lottie options={defaultOptions} width={150} height={150} />
              </div>
            </>
          ) : (
            <TechListContainer />
          )}
        </Main>
      </Page>
    </motion.div>
  );
};

export default Home;
