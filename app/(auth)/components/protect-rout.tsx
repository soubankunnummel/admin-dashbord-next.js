"use client";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProtectRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      setIsLoading(false);

    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className=" h-screen flex justify-center items-center">
        {" "}
        <Spinner />{" "}
      </div>
    );
  }

  return <>{children}</>;
}
