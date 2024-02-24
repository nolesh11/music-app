import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledRegistartonPage } from "./RegistrationPage.style";
import { Input } from "../../components/UI/input/Input";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRegister, selectIsAuth } from "../../store/slices/userSlices";
import { Action } from "redux";
import { ThunkDispatch } from 'redux-thunk';
import { useEffect } from "react";


interface IRegisterPageForm {
  username: string;
  email: string;
  password: string;
}

const registerFormSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required("Required field"),
  password: yup.string().min(4, "Minimum 4 digits").required("Required field"),
});

export const RegistrationPage = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch: ThunkDispatch<any, any, Action> = useDispatch(); //eslint-disable-line
  const navigate = useNavigate();


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterPageForm>({
    resolver: yupResolver(registerFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: 'onChange'
  });
  
  const onRegisterSubmit: SubmitHandler<IRegisterPageForm> = async (values) => {
    const data = await dispatch(fetchUserRegister(values))
    if (!data.payload) {
      alert("Can not sign up")
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }
  }

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [navigate, isAuth])

  console.log('isAuth', isAuth);

  return (
    <StyledRegistartonPage>
      <div className="container">
        <form
          onSubmit={handleSubmit(onRegisterSubmit)}
          className="w-96 bg-transparent border-2 border-default backdrop-blur-xl p-10 rounded-xl"
        >
          <h1 className="text-xxxxl text-black font-semibold text-center mb-6">
            Registration
          </h1>
          <div className="input-box">
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="Full name"
                  isError={errors.username ? true : false}
                  errorMessage={errors.username?.message}
                  {...field}
                  className="w-full mb-6 pl-8 pr-12 py-4 bg-inherit rounded-full text-black border-2 border-default placeholder:text-black"
                />
              )}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  type="email"
                  placeholder="Email"
                  isError={errors.email ? true : false}
                  errorMessage={errors.email?.message}
                  {...field}
                  className="w-full mb-6 pl-8 pr-12 py-4 bg-inherit rounded-full text-black border-2 border-default placeholder:text-black"
                />
              )}
            />
            <MdEmail className="icon" />
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
          <button
            type="submit"
            className="w-full h-11 py-2 bg-white rounded-full shadow-default text-m"
          >
            Sign up
          </button>
          <div>
            <p className="register text-white text-center mt-5 ">
              Already have an account?
              <Link to={"/login"}>Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </StyledRegistartonPage>
  );
};
