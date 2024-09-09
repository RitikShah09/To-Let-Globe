import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import axios from "../utils/axios";
import { useState } from "react";

function CreateNewPassword() {
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const { token } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(email) => {
    try {
      const { data } = await axios.put(`/reset-password/${token}`, email);
      setMsg(data.msg)
    } catch (error) {
      setErr(error.response.data.message);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-black-950 text-white">
        <div className="Register_wrapper w-[85vw] h-[60vh] mobile:w-[70vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] xl:h-[50vh]">
          <div className="Register_wrapper2 w-[100%] h-[100%]">
            {/*Forget Password Container*/}
            <div className="absolute w-[calc(100%-10px)] h-[calc(100%-10px)] top-1 left-1 flex flex-col items-center justify-center text-white bg-black rounded-3xl">
              <h1 className="text-4xl pb-7 text-center">Re-create Password</h1>
              <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="input_styled"
                  type="password"
                  placeholder="New Password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: { value: 6, message: "Min Length is 6" },
                    maxLength: { value: 15, message: "Max Length is 15" },
                  })}
                />

                {errors.password && (
                  <div className="absolute left-[50%] text-red-400 text-xs">
                    {errors.password.message}
                  </div>
                )}

                <input
                  className="input_styled"
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: { value: 8, message: "Min Length is 8" },
                    maxLength: { value: 15, message: "Max Length is 15" },
                    validate: (val) => {
                      if (watch("password") != val) {
                        return "Passwords do not match";
                      }
                    },
                  })}
                />

                {errors.confirmPassword && (
                  <div className="absolute left-[50%] text-red-400 text-xs">
                    {errors.confirmPassword.message}
                  </div>
                )}

                <input
                  className="btn_styled mt-2"
                  type="submit"
                  value="PASSWORD CREATED"
                />
              </form>
              {msg && <p className="text-green-400">{msg}</p>}
              {err && <p className="text-red-400">{err}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateNewPassword;
