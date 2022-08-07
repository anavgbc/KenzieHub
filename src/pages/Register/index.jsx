import ButtonReturn from "../../components/buttonBack";
import KenzieHub from "../../components/kenzieHub";
import Form from "../../components/registerForm";
import { ContainerTop, ContainerMain, Page, ContainerTotal } from "./style";
import { motion } from "framer-motion";

const Register = ({ isAuthenticated }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ durantion: 0.8 }}
    >
      <Page>
        <ContainerTotal>
          <ContainerTop>
            <KenzieHub />
            <ButtonReturn>Voltar</ButtonReturn>
          </ContainerTop>
          <ContainerMain>
            <h3>Crie sua conta</h3>
            <span>Rápido e grátis, vamos nessa!</span>
            <Form isAuthenticated={isAuthenticated} />
          </ContainerMain>
        </ContainerTotal>
      </Page>
    </motion.div>
  );
};

export default Register;
