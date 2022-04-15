import "./authPage.css";
import { Navbar } from "../../components/home/navbar.js";
import { SignupForm } from "../../components/auth/signup.js";
const Signup = () => {
  return (
    <>
      <Navbar />
      <SignupForm />
    </>
  );
};
export { Signup };
