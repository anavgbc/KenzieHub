import FormLogin from "../../components/loginForm";
import KenzieHub from "../../components/kenzieHub";
import { Page, ContainerLogin, ContainerButton } from "./style";
import Button from "../../components/button";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ durantion: 0.8 }}
    >
      <Page>
        <KenzieHub />
        <ContainerLogin>
          <h3>Login</h3>
          <FormLogin />
          <ContainerButton>
            <Button grayColor redirect type="button">
              Cadastre-se
            </Button>
          </ContainerButton>
        </ContainerLogin>
      </Page>
    </motion.div>
  );
};

export default Login;
