"use client";
import React, { useEffect, useState } from "react";
import Input from "../shared/Input";
import AuthLayout from "./AuthLayout";
import Button from "../shared/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/schema/authSchema";
import { useSignupMutation } from "@/api/authAPI";
import { useRouter } from "next/navigation";
interface FormState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
function Signup() {
  const router = useRouter();
  const [signup, { isLoading, isError, isSuccess }] = useSignupMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormState> = async (data) => {
    await signup(data);
  };
  useEffect(() => {
    if (isSuccess) {
      router.push("/auth/login");
    }
  }, [isSuccess]);
  return (
    <AuthLayout>
      <div>
        <span className="text-h1 font-h1 text-white flex justify-center">
          Signup
        </span>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={"First Name"}
            name="firstname"
            type={"text"}
            placeholder={"i.e John"}
            register={register}
            error={errors.firstname?.message}
          />

          <Input
            label={"Last Name"}
            name="lastname"
            type={"text"}
            placeholder={"i.e Doe"}
            register={register}
            error={errors.lastname?.message}
          />
          <Input
            label={"Email"}
            name="email"
            type={"email"}
            placeholder={"xyz@gmail.com"}
            register={register}
            error={errors.email?.message}
          />
          <Input
            label={"Password"}
            name="password"
            type={"password"}
            placeholder={"aBc@123*"}
            register={register}
            error={errors.password?.message}
          />
          <Button
            label={
              isLoading
                ? "Please wait!"
                : isError
                ? "Error! Please try again"
                : "Signup"
            }
            height={"h-16"}
            width={"w-full"}
            bg={"bg-formBtnBg"}
            color={"text-white"}
            type={"submit"}
          />
        </form>
      </div>
    </AuthLayout>
  );
}

export default Signup;
