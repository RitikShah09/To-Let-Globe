import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../utils/axios";
import { useState } from "react";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
const  [msg,setMsg] = useState('');
const  [err,setErr] = useState('');

  const onSubmit = async (user) => {
    try {
      const { data } = await axios.post("/user/signup", user);
      setMsg(data.msg)
    } catch (error) {
      setErr(error.response.data.message);
    }
  };

  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-center bg-black-950 text-white">
        <div className="Register_wrapper w-[95vw] h-[80vh] mobile:w-[85vw]  md:w-[45vw] lg:w-[30vw] xl:w-[25vw]">
          <div className="Register_wrapper2 w-[100%] h-[100%]">
            {/*Register Container*/}
            <div className="absolute w-[calc(100%-10px)] h-[calc(100%-10px)] top-1 left-1 flex flex-col items-center justify-center text-white bg-black rounded-3xl">
              <h1 className="text-4xl pb-7 text-center">Register</h1>

              <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-2">
                  <label className="fa-solid fa-user-tie mt-2"></label>

                  <input
                    className="input_styled"
                    type="text"
                    placeholder="first Name"
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "First Name is required",
                      },
                    })}
                  />

                  {errors.firstName && (
                    <div className="absolute left-[50%] text-red-400 text-xs">
                      {errors.firstName.message}
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <label className="fa-solid fa-user-tie mt-2"></label>

                  <input
                    className="input_styled"
                    type="text"
                    placeholder="last Name"
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "Last Name is required",
                      },
                    })}
                  />
                  {errors.lastName && (
                    <div className="absolute left-[50%] text-red-400 text-xs">
                      {errors.lastName.message}
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <label className="fa-regular fa-envelope mt-2"></label>

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
                </div>

                <div className="flex gap-2">
                  <label className="fa-solid fa-phone mt-2"></label>

                  <input
                    className="input_styled"
                    type="number"
                    placeholder="Phone No."
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Phone No. is required",
                      },
                    })}
                  />

                  {errors.phone && (
                    <div className="absolute left-[50%] text-red-400 text-xs">
                      {errors.phone.message}
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <label className="fa-solid fa-check mt-2"></label>

                  <select
                    className="input_styled"
                    {...register("role", {
                      required: {
                        value: true,
                        message: "Designation is required",
                      },
                    })}
                  >
                    <option value="none" disabled>
                      Select Role
                    </option>
                    <option value="Buyer">Buyer</option>
                    <option value="Tenant">Tenant</option>
                    <option value="Admin">Admin</option>
                  </select>

                  {errors.designation && (
                    <div className="absolute left-[50%] text-red-400 text-xs">
                      {errors.designation.message}
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <label className="fa-solid fa-lock mt-2"></label>

                  <input
                    className="input_styled"
                    type="password"
                    placeholder="Create Password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: { value: 8, message: "Min Length is 8" },
                      maxLength: { value: 15, message: "Max Length is 15" },
                    })}
                  />

                  {errors.password && (
                    <div className="absolute left-[50%] text-red-400 text-xs">
                      {errors.password.message}
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <label className="fa-solid fa-lock mt-2"></label>

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
                </div>

                <button type="submit" className="btn_styled">
                  REGISTER
                </button>
               {
                msg && (
                  <p className="text-green-400">{msg}</p>
                )
               }
               {
                err && (
                  <p className="text-red-400">{err}</p>
                )
               }
              </form>

              <div className="w-[80%] mt-5 text-right">
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

export default Register;
