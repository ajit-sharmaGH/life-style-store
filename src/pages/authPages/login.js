import "./authPage.css";
import { Navbar } from "../../components/home/navbar.js";
import { LoginForm } from "../../components/auth/login.js";
const Login = () => {
  return (
    <>
      <Navbar />
      <LoginForm />
    </>
  );
};
export { Login };
