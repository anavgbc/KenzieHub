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
} from "./style";
import Lottie from "react-lottie";
import animationData from "../../assets/51382-astronaut-light-theme.json";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { UserContext } from "../../Providers/userContext/UserContext";
import { useContext, useState } from "react";
import AddModal from "../../components/AddModal";

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { isAuthenticated, setAuthenticated, user } = useContext(UserContext);

  console.log(user);

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ durantion: 0.8 }}
    >
      <Page>
        {isOpenModal && <AddModal setIsOpenModal={setIsOpenModal} />}
        <NavBar>
          <ContainerNavBar>
            <KenzieHub></KenzieHub>
            <ButtonReturn setAuthenticated={setAuthenticated}>
              Sair
            </ButtonReturn>
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
          <button onClick={() => setIsOpenModal(true)}>+</button>
          <h3>Ops, parece que não temos nada aqui...</h3>
          <div>
            <Lottie options={defaultOptions} width={150} height={150} />
          </div>
        </Main>
      </Page>
    </motion.div>
  );
};

export default Home;
