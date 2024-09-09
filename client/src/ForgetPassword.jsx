import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from "../utils/axios";
import { useState } from 'react';

function ForgetPassword() {
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");


  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (email) => {
    try {
      const { data } = await axios.post("/forgot/password", email);
      setMsg(data.msg);
    } catch (error) {
      setErr(error.response.data.message);
    }
  };

  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-center bg-black-950 text-white">
        <div className="Register_wrapper w-[85vw] h-[60vh] mobile:w-[70vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] xl:h-[50vh]">
          <div className="Register_wrapper2 w-[100%] h-[100%]">
            {/*Forget Password Container*/}
            <div className="absolute w-[calc(100%-10px)] h-[calc(100%-10px)] top-1 left-1 flex flex-col items-center justify-center text-white bg-black rounded-3xl">
              <h1 className="text-4xl pb-7 text-center">Re-create Password</h1>
              <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="input_styled"
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                />
                {errors.email && (
                  <div className="absolute left-[50%] text-red-400 text-xs">
                    {errors.email.message}
                  </div>
                )}

                <input className="btn_styled" type="submit" value="SUBMIT" />
              </form>
              {msg && <p className="text-green-400">{msg}</p>}
              {err && <p className="text-red-400">{err}</p>}

              <div className="w-[80%] mt-5 text-right text-emerald-300 hover:cursor-pointer">
                <Link to="/" className="link_styled">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
