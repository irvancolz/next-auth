import React from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function SuperAdminPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/auth/login?callbackUrl=/superAdmin");
  }

  return <h1>Super Admin Page</h1>;
}
