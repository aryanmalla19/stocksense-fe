import React from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useLogin from "../../hooks/authhooks/useLogin";
import useAuthStore from "../../store/authStore";
import GoogleLoginButton from "../../authcomponent/GoogleLoginButton";
import Input from "../../components/stocks/Input";
import Rememberme from "../../authcomponent/Rememberme";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import logo from "../../assets/image.png";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Login() {
    const { mutate, serverErrors, isLoading } = useLogin();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {
        mutate(data);
    };

    const accessToken = useAuthStore((store) => store.accessToken);
    if (accessToken) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className='flex md:flex-row flex-col-reverse rounded-4xl'>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='md:w-5/12 bg-[#f2dafd] md:pt-10 md:min-h-[100vh]'
            >
                <div className='w-10/12 md:w-8/12 mx-auto flex flex-col'>
                    <motion.h1
                        className='md:text-2xl md:mt-6 font-semibold'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Login to Your Account
                    </motion.h1>
                    <motion.p
                        className='mt-1 md:text-lg font-medium text-gray-700'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Welcome back! Please enter your details.
                    </motion.p>

                    <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                        <motion.div className='flex my-2 flex-col' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                            <label className='ml-1 font-medium' htmlFor='email'>Email</label>
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
                        </motion.div>

                        <motion.div className='flex my-2 flex-col' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                            <label className='ml-1 font-medium' htmlFor='password'>Password</label>
                            <Input
                                icon={FaLock}
                                id='password'
                                type='password'
                                placeholder='**********'
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                error={errors.password?.message || serverErrors?.password}
                            />
                        </motion.div>

                        <Rememberme />

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            type='submit'
                            disabled={isLoading}
                            className='cursor-pointer bg-[#9f44c9] hover:bg-[#923EB9] text-white mt-2 md:mt-10 rounded-xl w-full py-3'
                        >
                            {isLoading ? <LoadingSpinner /> : "Submit"}
                        </motion.button>

                        <motion.div
                            className='flex mt-5 justify-center items-center'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <div className='line mx-3 h-[1px] w-20 bg-gray-400'></div>
                            Or
                            <div className='line mx-3 h-[1px] w-20 bg-gray-400'></div>
                        </motion.div>

                        <GoogleLoginButton />

                        <motion.p
                            className='text-center mt-5 font-medium'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            Don't have an account?{" "}
                            <Link to='/register' className="font-semibold text-[#923EB9] hover:underline">Sign Up</Link>
                        </motion.p>
                    </form>
                </div>
            </motion.div>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='md:w-7/12 bg-[#f2dafd] md:bg-[#f9ecff]'
            >
                <div className="mx-8 my-3 md:m-10 md:text-right">
                    <motion.h1
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className='text-2xl md:text-4xl font-bold'
                    >
                        <span className='text-[#923EB9]'>Stock</span>Sense
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className='mt-1 text-base md:text-lg font-medium text-gray-700'
                    >
                        Let the Stock in you begin!
                    </motion.p>
                </div>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <img className='mx-auto mt-0 md:block hidden' src={logo} alt='illustration' />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Login;
