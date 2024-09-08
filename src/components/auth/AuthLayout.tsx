import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-formBg rounded shadow-md px-50 py-70">{children}</div>
    </div>
  );
};

export default AuthLayout;
