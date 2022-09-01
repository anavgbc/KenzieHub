import FormLogin from "../../components/loginForm";
import KenzieHub from "../../components/kenzieHub";
import { Page, ContainerLogin, ContainerButton } from "./style";
import Button from "../../components/button";
import { motion } from "framer-motion";

const Login = (): JSX.Element => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{ durantion: 1.5 }}
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
