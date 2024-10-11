"use client";
import { useGetPost } from "@/src/hooks/recentPosts.hook";
import Image from "next/image";
import React, { useState } from "react";
import { FaDownLong, FaUpLong } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import toukir from "../../../public/toukir.jpg";
import { useDownvote, useUpvote } from "@/src/hooks/comment.hook";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import CommentReply from "./CommentReply";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useUser } from "@/src/context/user.provider";
dayjs.extend(relativeTime);

export default function Comment({ postId }: { postId: string }) {
  const [openCommentReplyID, setOpenCommentReplyID] = useState<string>("");
  const [openCommentNestedReplyID, setCommentNestedReplyID] =
    useState<string>("");
  const { data: postData, isLoading, error } = useGetPost(postId);
  const { mutate: handleUpvote } = useUpvote();
  const { mutate: handleDownvote } = useDownvote();
  const { user } = useUser();
  const userId = user!?._id;

  const handleCommnetUpvote = (
    voteId: string,
    postId: string,
    commentId: string,
    replyId?: string
  ) => {
    handleUpvote({ voteId, postId, userId, commentId, replyId });
  };
  const handleCommnetDownvote = (
    voteId: string,
    postId: string,
    commentId: string,
    replyId?: string
  ) => {
    handleDownvote({ voteId, postId, userId, commentId, replyId });
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);
  return (
    <div className="h-[450px] overflow-y-auto comment_scroll">
      {postData?.data.post.comments.map((comment: any) => {
        const checkCommentUpvoteStatus = comment.votes.upvote.includes(userId);
        const checkCommentDownStatus = comment.votes?.downvote.includes(userId);
        return (
          <>
            <div key={comment?._id} className="flex mt-2">
              <div className=" pr-2  mt-2 shrink-0 ">
                <Image
                  className=" rounded-full"
                  height={25}
                  width={25}
                  src={toukir}
                  alt="user image"
                />
              </div>
              <div>
                <div className=" bg-[#1d1c1c] py-1 px-2 rounded">
                  <p>
                    <span className="font-semibold  text-sm">
                      {comment.user?.name}
                    </span>
                  </p>
                  <p className="mb-1 text-gray-400 leading-[1.3] text-sm">
                    {comment.text}
                  </p>
                </div>
                <div className="flex justify-between mt-1 text-sm font-medium text-gray-300 ml-3">
                  <div className="flex gap-5">
                    <span>{dayjs(comment.createdAt).fromNow()}</span>
                    <button
                      onClick={() => {
                        handleCommnetUpvote(
                          comment.votes?._id,
                          postData.data?._id,
                          comment?._id
                        );
                      }}
                      className={`flex gap-[2px] ${checkCommentUpvoteStatus ? "text-green-500" : ""} `}
                    >
                      <FaUpLong className={`text-[15px]`} />
                      <p>{comment.votes.upvote.length}</p>
                    </button>
                    <button
                      onClick={() => {
                        handleCommnetDownvote(
                          comment.votes?._id,
                          postData.data?._id,
                          comment?._id
                        );
                      }}
                    >
                      <div className="flex items-center gap-[2px]">
                        <FaDownLong
                          className={`flex gap-[2px] ${checkCommentDownStatus ? "text-green-500" : ""} `}
                        />
                        <p>{comment.votes.downvote.length}</p>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        setCommentNestedReplyID("");
                        setOpenCommentReplyID(comment?._id);
                      }}
                    >
                      Reply
                    </button>
                  </div>
                  <div className="hiden"></div>
                </div>
              </div>
            </div>

            {/* comment reply  */}
            {openCommentReplyID === comment?._id &&
              !openCommentNestedReplyID && (
                <form
                  // onSubmit={handleSubmit(onSubmit)}
                  className="flex items-center bg-[#1D1C1C]  w-[60%] relative left-32 top-1 mb-3"
                >
                  <div className="px-2">
                    <Image
                      className=" rounded-full"
                      height={30}
                      width={30}
                      src={comment.user.profilePhoto}
                      alt=""
                    />
                  </div>
                  <input
                    // {...register("comment")}
                    type="text"
                    autoFocus
                    className="w-full mt-1 outline-none bg-[#1D1C1C]  py-1 text-sm comment_ploaceholder"
                    placeholder={`Reply to ${comment.user?.name}`}
                  />
                  <button className="text-xl text-green-500 hover:text-green-600  py-[14px] pr-3 pl-4 transition duration-200">
                    <IoSend />
                  </button>
                </form>
              )}

            {/* nested comment  */}
            <CommentReply
              replies={comment.replies}
              postId={postData.data?._id}
              commentId={comment?._id}
              openCommentReplyID={openCommentReplyID}
              setOpenCommentReplyID={setOpenCommentReplyID}
              openCommentNestedReplyID={openCommentNestedReplyID}
              setCommentNestedReplyID={setCommentNestedReplyID}
            />
          </>
        );
      })}
    </div>
  );
}
