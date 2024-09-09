import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "../utils/axios";
import { useNavigate } from 'react-router-dom';
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const onSubmit = async (user) => {
    try {
      const { data } = await axios.post("/user/signin", user);
      navigate('/home')
      
    } catch (error) {
      setMsg(error.response.data.message);
    }
  };

  return (
    <div className="mt-20 flex flex-col items-center justify-center bg-black text-white">
      <div className="Register_wrapper w-[85vw] h-[60vh] mobile:w-[70vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] xl:h-[50vh] ">
        <div className="Register_wrapper2 w-[100%] h-[100%] ">
          <div className="absolute w-[calc(100%-10px)] h-[calc(100%-10px)] top-1 left-1 flex items-center justify-center  bg-black rounded-3xl">
            <form className="w-60" onSubmit={handleSubmit(onSubmit)}>
              <div className="login_form_container">
                <h1 className="text-white text-3xl mb-6 text-center xl:text-4xl">
                  Login
                </h1>

                <div className="flex gap-2">
                  <label className="fa-solid fa-user-tie mt-2 "></label>
                  <input
                    className="input_styled"
                    placeholder="Email"
                    type="email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "email is required",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="absolute left-[50%] text-red-400 text-xs">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <label className="fa-solid fa-lock mt-2 "></label>
                  <input
                    className="input_styled"
                    placeholder="Password"
                    type="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                    })}
                  />
                  {errors.password && (
                    <div className="absolute left-[50%] text-red-400 text-xs">
                      {errors.password.message}
                    </div>
                  )}
                </div>

                <div className="mt-8 w-60 flex justify-center">
                  <button type="submit" className="btn_styled w-[100%]">
                    LOGIN
                  </button>
                </div>
                {msg && <p className="text-red-400">{msg}</p>}

                <div className="flex justify-between mt-5 text-sm w-60">
                  <Link to="forgetpassword" className="link_styled">
                    Forget Password?
                  </Link>

                  <Link className="link_styled" to="/register">
                    Register
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
