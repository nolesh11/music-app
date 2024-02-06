import { Link } from "react-router-dom";

import { StyledLoginPage } from "./LoginPage.style";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div className="container">
        <form className="w-96 bg-transparent border-2 border-default backdrop-blur-xl p-10 rounded-xl">
          <h1 className="text-xxxxl text-black font-semibold text-center mb-6">Login</h1>
          <div className="input-box flex">
            <input type="text" placeholder="Username" className="w-full mb-6 pl-8 pr-12 py-4 bg-inherit rounded-full text-black border-2 border-default placeholder:text-black" />
            <FaUser className="icon" />
          </div>
          <div className="input-box flex rounded-full">
            <input type="password" placeholder="Password" className="w-full mb-6 px-8 pr-12 py-4 bg-inherit rounded-full text-black border-2 border-default placeholder:text-black" />
            <FaLock className="icon" />
          </div>
          <div className="remember-forget flex justify-between mb-4">
            <label className="text-black text-sm">
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <Link to={"/"} className="text-sm">Forgot password</Link>
          </div>
          <button type="submit" className="w-full h-11 bg-white rounded-full shadow-default text-m">Login</button>
          <div>
            <p className="register text-white text-center mt-5 ">
              Don't have an account? 
              <Link to={"/"}>Register</Link>
            </p>
          </div>
        </form>
      </div>
    </StyledLoginPage>
  );
};
