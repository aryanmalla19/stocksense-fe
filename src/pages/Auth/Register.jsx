import React from "react";
import { Navigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useRegister from "../../hooks/authhooks/useRegister"; // Switched from useLogin
import useAuthStore from "../../store/authStore";
import GoogleLoginButton from "../../authcomponent/GoogleLoginButton";
import Input from "../../components/stocks/Input";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import logo from "../../assets/image.png";
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";

function Register() {
    const { mutate, serverErrors, isLoading } = useRegister(); 
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const password = watch("password");

    const onSubmit = (data) => {
        mutate(data);
    };

    const accessToken = useAuthStore((store) => store.accessToken);
    if (accessToken) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className='flex rounded-4xl'>
            {/* Left Section */}
            <div className='w-7/12 bg-[#f9ecff]'>
                <div className="m-10">
                    <h1 className='text-4xl font-bold'>
                        <span className='text-[#923EB9]'>Stock</span>Sense
                    </h1>
                    <p className='mt-1 text-lg font-medium text-gray-700'>
                        Let the Stock in you begin!
                    </p>
                </div>
                <div>
                    <img className='mx-auto' src={logo} alt='illustration' />
                </div>
            </div>

            {/* Right Section */}
            <div className='w-5/12 bg-[#f2dafd] pt-4 min-h-[100vh]'>
                <div className='w-8/12 mx-auto flex flex-col'>
                    <h1 className='text-2xl mt-6 font-semibold'>Register to Your Account</h1>
                    <p className='mt-1 text-lg font-medium text-gray-700'>
                        Welcome! Please enter your details.
                    </p>

                    <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                        {/* Name */}
                        <div className='flex my-2 flex-col'>
                            <label className='ml-1 font-medium' htmlFor='name'>
                                Full Name
                            </label>
                            <Input
                                icon={FaUserAlt}
                                id='name'
                                type='text'
                                placeholder='Enter your full name'
                                {...register("name", {
                                    required: "Name is required",
                                })}
                                error={errors.name?.message || serverErrors?.name}
                            />
                        </div>

                        {/* Email */}
                        <div className='flex my-2 flex-col'>
                            <label className='ml-1 font-medium' htmlFor='email'>
                                Email
                            </label>
                            <Input
                                icon={FaEnvelope}
                                id='email'
                                type='email'
                                placeholder='Enter your email'
                                {...register("email", {
                                    required: "Email is required",
                                })}
                                error={errors.email?.message || serverErrors?.email}
                            />
                        </div>

                        {/* Password */}
                        <div className='flex my-2 flex-col'>
                            <label className='ml-1 font-medium' htmlFor='password'>
                                Password
                            </label>
                            <Input
                                icon={FaLock}
                                id='password'
                                type='password'
                                placeholder='**********'
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                                error={errors.password?.message || serverErrors?.password}
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className='flex my-2 flex-col'>
                            <label className='ml-1 font-medium' htmlFor='password_confirmation'>
                                Confirm Password
                            </label>
                            <Input
                                icon={FaLock}
                                id='password_confirmation'
                                type='password'
                                name='password_confirmation'
                                placeholder='**********'
                                {...register("password_confirmation", {
                                    required: "Confirm Password is required",
                                    validate: value =>
                                        value === password || "Passwords do not match",
                                })}
                                error={errors.password_confirmation?.message}
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type='submit'
                            disabled={isLoading}
                            className='cursor-pointer bg-[#9f44c9] hover:bg-[#923EB9] text-white mt-5 rounded-xl w-full py-3'
                        >
                            {isLoading ? <LoadingSpinner /> : "Register"}
                        </button>

                        {/* Divider */}
                        <div className='flex mt-5 justify-center items-center'>
                            <div className='line mx-3 h-[1px] w-20 bg-gray-400'></div>
                            Or
                            <div className='line mx-3 h-[1px] w-20 bg-gray-400'></div>
                        </div>

                        {/* Google Button */}
                        <GoogleLoginButton />

                        {/* Redirect */}
                        <p className='text-center mt-5 font-medium'>
                            Already have an account?{" "}
                            <Link
                                className='font-semibold text-[#923EB9] hover:underline'
                                to='/loginn'
                            >
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
