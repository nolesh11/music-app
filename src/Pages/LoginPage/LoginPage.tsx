import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledLoginPage } from "./LoginPage.style";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
// import { changeUser } from "../../store/slices/userSlices";
import { Input } from "../../components/UI/input/Input";
// import { useLoginUserMutation } from "../../store/API/authApi";
import { fetchUserData, selectIsAuth } from "../../store/slices/userSlices";

interface ILoginPageForm {
  email: string;
  password: string;
}

const loginFormSchema = yup.object({
  email: yup.string().email().required("Required field"),
  password: yup.string().min(4, "Minimum 4 digits").required("Required field"),
});

export const LoginPage = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch: ThunkDispatch<any, any, Action> = useDispatch(); //eslint-disable-line
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginPageForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange"
  });
  


  // const [loginUser, { data: userData }] = useLoginUserMutation()
  
  const onLoginSubmit: SubmitHandler<ILoginPageForm> = async (values) => { 
    const data = await dispatch(fetchUserData(values))
    if (!data.payload) {
      alert("Can not login")
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [navigate, isAuth])

  console.log('isAuth', isAuth);

  return (
    <StyledLoginPage>
      <div className="container">
        <form
          onSubmit={handleSubmit(onLoginSubmit)}
          className="w-96 bg-transparent border-2 border-default backdrop-blur-xl p-10 rounded-xl"
        >
          <h1 className="text-xxxxl text-black font-semibold text-center mb-6">
            Login
          </h1>
          <div className="input-box">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="Username"
                  isError={errors.email ? true : false}
                  errorMessage={errors.email?.message}
                  {...field}
                  className="w-full mb-6 pl-8 pr-12 py-4 bg-inherit rounded-full text-black border-2 border-default placeholder:text-black"
                />
              )}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  type="password"
                  placeholder="Password"
                  isError={errors.password ? true : false}
                  errorMessage={errors.password?.message}
                  {...field}
                  className="w-full mb-6 px-8 pr-12 py-4 bg-inherit rounded-full text-black border-2 border-default placeholder:text-black"
                />
              )}
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forget flex justify-between mb-4">
            <label className="text-black text-sm">
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <Link to={"/"} className="text-sm">
              Forgot password
            </Link>
          </div>
          <button
            type="submit"
            className="w-full h-11 bg-white rounded-full shadow-default text-m"
          >
            Login
          </button>
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
