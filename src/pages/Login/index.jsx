import FormLogin from "../../components/loginForm";
import KenzieHub from "../../components/kenzieHub";
import { Page, ContainerLogin, ContainerButton } from "./style";
import Button from "../../components/button";
import { motion } from "framer-motion";

const Login = ({ isAuthenticated, setAuthenticated }) => {
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
          <FormLogin
            isAuthenticated={isAuthenticated}
            setAuthenticated={setAuthenticated}
          />
          <ContainerButton>
            <Button grayColor={true} type="button">
              Cadastre-se
            </Button>
          </ContainerButton>
        </ContainerLogin>
      </Page>
    </motion.div>
  );
};

export default Login;
