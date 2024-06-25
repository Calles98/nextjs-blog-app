import UpvoteButton from "@/components/upvoteButton";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React, { useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

async function PostPage({ params: { id } }: Props) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">{post.title}</h1>
      <p className="max-w-[750px] mx-auto leading-8">{post.body}</p>
      <UpvoteButton />
    </main>
  );
}

export default PostPage;
