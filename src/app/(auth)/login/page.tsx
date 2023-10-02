import Form from "./form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page E-Commerce  Website"
}

export default async function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full md:w-8/12 lg:w-4/12 md:px-8 py-10">
        <Form />
      </div>
    </div>
  );
}