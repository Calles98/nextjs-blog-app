"use client";
import React, { useState } from "react";

function UpvoteButton() {
  const [upvoteCount, setUpvoteCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => setUpvoteCount(upvoteCount + 1)}
        className="bg-blue-500 text-white p-2 border rounded-md mt-10"
      >
        Upvote
      </button>
    </div>
  );
}

export default UpvoteButton;
