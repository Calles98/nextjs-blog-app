import Form from "@/components/Form";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function CreatePage() {
  return (
    <main className="text-center p-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
      <Form />

      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}

export default CreatePage;
