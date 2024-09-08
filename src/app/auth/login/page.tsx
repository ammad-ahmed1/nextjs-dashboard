import Login from "@/components/auth/Login";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getServerSession();
  if (session) {
    // redirect("/");
  }
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
