import PostList from "@/components/PostList";

import React, { Suspense } from "react";

async function page() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <Suspense fallback="loading...">
        <PostList />
      </Suspense>
    </main>
  );
}

export default page;
