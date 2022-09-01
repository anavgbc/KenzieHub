import ButtonReturn from "../../components/buttonBack";
import KenzieHub from "../../components/kenzieHub";
import Form from "../../components/registerForm";
import { ContainerTop, ContainerMain, Page, ContainerTotal } from "./style";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{ durantion: 1.5 }}
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
            <Form />
          </ContainerMain>
        </ContainerTotal>
      </Page>
    </motion.div>
  );
};

export default Register;
