"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordField } from "@/components/ui/password-field";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export default function ProfileUpdate() {
  const form = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-2xl p-6 md:p-10 w-full max-w-lg mx-auto shadow-md relative">
      {/* Profile Image Upload */}
      <div className="flex justify-center items-center p-4 bg-gray-300 rounded-full">
        <Image
          src="/assets/icons/camera.png"
          width={35}
          height={35}
          alt="Upload"
          className="object-contain"
        />
      </div>

      {/* Skip Button */}
      <Link
        href="/"
        className="absolute top-4 right-6 text-gray-500 text-lg hover:underline"
      >
        Skip
      </Link>

      <p className="text-teal-600 text-lg text-center mt-4">Upload Profile Picture</p>

      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 mt-6 w-full max-w-sm"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Your Name</FormLabel>
                <FormControl>
                  <Input {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Email</FormLabel>
                <FormControl>
                  <Input {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <PasswordField form={form} name="password" label="Password" />

          {/* Forgot Password */}
          <p className="text-gray-500 text-sm text-center hover:underline cursor-pointer">
            Forgot Password?
          </p>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-full max-w-xs font-bold text-lg rounded-lg bg-teal-500 hover:bg-teal-600"
              size="lg"
            >
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
