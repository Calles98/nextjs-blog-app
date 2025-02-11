import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";

async function PostList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-5">
            <Link
              className="hover:text-blue-500 hover:underline"
              href={`/posts/${post.id}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
