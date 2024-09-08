"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import AppBar from "../components/layout/appbar/Appbar";
import { Providers } from "@/redux/provider/provider";
import { SessionProvider, useSession } from "next-auth/react";
import Sidebar from "@/components/layout/sidebar/Sidebar";

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  console.log(session, ".............session");
  const token = false;

  return (
    <div className="flex">
      <div className={`w-64 ${!session && "hidden"}`}>
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <div>
          <AppBar />
        </div>
        <div className="mx-15">{children}</div>
      </div>
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className="bg-dark text-white">
          <Providers>
            <LayoutContent>{children}</LayoutContent>
          </Providers>
        </body>
      </html>
    </SessionProvider>
  );
}
