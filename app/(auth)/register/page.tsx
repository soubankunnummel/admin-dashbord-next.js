"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
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
import { useAdminRegister } from "@/hooks/useAuth";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// Define your form schema with validation
const formSchema = z
  .object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    phone: z.string().min(10, {
      message: "Phone number must be at least 10 digits.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirm_password: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirm_password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirm_password"],
      });
    }
  });

export default function Register() {

  // Initialize form with validation
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
  });
  const router = useRouter();

  const registerMutaioin = useAdminRegister();
  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const response = await registerMutaioin.mutateAsync(values);
      console.log(response);
      toast.success("Register Success");
      setTimeout(() => router.push("/login"), 2000);
    } catch (error:any) {
      toast.error(error.response?.data?.message || "Registration failed.");
    }
  }

  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      {/* Logo Section - Hidden on mobile, visible on lg screens */}
      <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center p-6">
        <Image
          src="/assets/images/auth/dashbord-logo.png"
          width={200}
          height={200}
          alt="logo"
          className="object-contain"
        />
      </div>

      {/* Form Section */}
      <div className="flex w-full lg:w-1/2 justify-center items-center p-4 md:p-8 relative">
        {/* Vertical separator - only visible on md+ screens */}
        <div className="absolute left-0 h-[90%] hidden lg:block">
          <CustomSeparator
            orientation="vertical"
            className="h-full"
            lineColor="#E25845"
            dotColor="#E25845"
          />
        </div>

        {/* Form Container */}
    
        <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 mt-4 lg:mt-0 overflow-y-auto max-h-[600px] scrollbar-hide">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              Create New Account
            </h1>
            <p className="text-sm font-normal text-[#7F7F7F] mt-1">
              Welcome to Free shops App controller
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <PasswordField form={form} name="password" label="Password" />
              <PasswordField
                form={form}
                name="confirm_password"
                label="Confirm Password"
              />

              <div className="flex flex-col items-center gap-4 mt-6">
                <Button
                  type="submit"
                  className="font-bold text-xl rounded-xl bg-[#199FB1] hover:bg-[#168a99]"
                  size={"lg"}
                >
                 {form.formState.isSubmitting ? "Registering..." : "Create Account"}
                </Button>
                <p className="text-base font-medium text-[#7CB5EC] cursor-pointer">
                <Link href="/login">Already have an account?</Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
