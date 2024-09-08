"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../shared/Input";
import { Form, SubmitHandler, useForm } from "react-hook-form";
import { signIn, useSession, signOut, getSession } from "next-auth/react";
import AuthLayout from "./AuthLayout";
import Button from "../shared/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/authSchema";
import { baseurl } from "@/api/apiConfig";

interface FormState {
  email: string;
  password: string;
  error: any;
  errMsg: string;
  name: string;
}
function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "eve.holt@reqres.in",
      password: "aBc@123*",
      name: "",
      error: "",
    },
  });
  const { data: session, status, ...rest } = useSession();
  const onSubmit: SubmitHandler<FormState> = async (data) => {
    console.log("I am called");
    console.log(data);

    try {
      const response: any = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      console.log({ response });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Login Successful", response);
      router.push("/dashboard");
      // toast({ title: "Login Successful" });
    } catch (error: any) {
      console.error("Login Failed:", error);
      // toast({ title: "Login Failed", description: error.message });
    }
  };
  return (
    <AuthLayout>
      <div>
        <span className="text-h1 font-h1 text-white flex justify-center">
          Login
        </span>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            label={"Login"}
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

export default Login;
