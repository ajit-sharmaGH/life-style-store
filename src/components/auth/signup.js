import "./auth.css";
import { Link } from "react-router-dom";
const SignupForm = () => {
  return (
    <div className="flex-center form_body">
      <form className="login-form form-container">
        <div className="flex-col login-form-div">
          <aside className="flex-wrap">
            <span className="flex-col">
              <label>First Name</label>
              <input
                type="text"
                placeholder="first name"
                className="login-input"
                required
              />
            </span>

            <span className="flex-col">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="last name"
                className="login-input"
                required
              />
            </span>
          </aside>
        </div>
        <div className="flex-col login-form-div">
          <label>E-mail</label>
          <input
            type="text"
            placeholder="email@gmail.com"
            className="login-input"
            required
          />
        </div>
        <div className="flex-col login-form-div">
          <label>Enter Password</label>
          <input
            type="password"
            placeholder="password"
            className="login_password-input"
            required
          />
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="password"
            className="login_password-input"
            required
          />
          <div className="flex">
            <span className="form_checkbox-input-container">
              <input type="checkbox" className="checkbox-input" />
              Remember Me
            </span>
            <button className="forget-pwd-btn">forget password</button>
          </div>
          <button type="submit" className="btn-outline form-btn">
            Login
          </button>

          <aside className="flex-wrap">
            <span>Already have an account &nbsp;</span>
            <Link to="/profile" className="link-tag">
              Login&nbsp;{`>>`}
            </Link>
          </aside>
        </div>
      </form>
    </div>
  );
};
export { SignupForm };
