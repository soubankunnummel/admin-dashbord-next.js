"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import { PasswordField } from "@/components/ui/password-field";
import Image from "next/image";
import { CustomSeparator } from "@/components/ui/separator";
import Link from "next/link";
import { useAdminLogin } from "@/hooks/useAuth";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
import { CustomError } from "@/types/user";

// Define your form schema with validation
const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function Login() {
  const router = useRouter();
  // Initialize form with validation
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  interface FormValues {
    email: string;
    password: string;
  }
  const loginMutaioin = useAdminLogin();

  async function onSubmit(values: FormValues) {
    console.log(values);
    try {
      const response = await loginMutaioin.mutateAsync(values);
      toast.success("Login Success");
      document.cookie = `token=${response.accessToken}; path=/;`;
      localStorage.setItem("token", response.accessToken);
      setTimeout(() => router.push("/welcome"), 2000);
      console.log(response);
     
    } catch (error) {
      const customError = error as CustomError;
      toast.error(customError.response?.data?.message || "Login failed.");
    }
  }

  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center p-6">
        <Image
          src="/assets/images/auth/dashbord-logo.png"
          width={200}
          height={200}
          alt="logo"
          className="object-contain"
        />
      </div>

      <div className="flex w-full lg:w-1/2 justify-center items-center p-4 md:p-8 relative">
        <div className="absolute left-0 h-[90%] hidden lg:block">
          <CustomSeparator
            orientation="vertical"
            className="h-full"
            lineColor="#E25845"
            dotColor="#E25845"
          />
        </div>

        <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 mt-4 lg:mt-0">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">Log in</h1>
            <p className="text-sm font-normal text-[#7F7F7F]">
              Welcome to Free shops App controller
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mt-8">
                    <FormLabel> Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <PasswordField form={form} name="password" label="Password" />

              <p className="text-[#7F7F7F] font-normal text-sm text-center ">
                Forgot Password
              </p>

              <div className="flex justify-center items-center">
                <Button
                  type="submit"
                  className=" font-bold text-xl rounded-xl bg-[#199FB1] hover:bg-[#168a99] text-center "
                  size={"lg"}
                >
                  {loginMutaioin.isPending ? <Spinner /> : "Login"}
                </Button>
              </div>
              <p className="text-base font-medium  text-[#7CB5EC] text-center mt-14 cursor-pointer">
                <Link href="/register">Create New Account</Link>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
