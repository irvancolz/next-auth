"use client";
import React from "react";
import { useSession, getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { useEffect } from "react";

export default function AdminPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("auth/login?callbackUrl=/admin");
    },
  });

  useEffect(() => {
    if (status == "loading") return;
    console.log(session);
  }, [session, status]);

  // if (!session) redirect("/auth/login");
  // console.log(status);
  return <h1>Admin Page</h1>;
}
