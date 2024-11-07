import React from "react";
import CommentItem from "./CommentItem";
import SectionHeading from "@/app/_components/Heading/SectionHeading";

export default function CommentList({ commentList }) {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading title={`Comments (${commentList.length})`} />
      <div className="px-5 py-4 bg-slate-600 rounded-md">
        <h3 className="mb-4">
          Please{" "}
          <span className="text-yellow-500 cursor-pointer font-medium">
            Sign in
          </span>{" "}
          to comment
        </h3>
        <hr className="my-4" />
        <div className="flex flex-col gap-3">
          {commentList.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}
