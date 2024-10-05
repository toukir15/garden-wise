import React from "react";

export default function comentAndShate() {
  const handleCommentLike = (postId, replyId) => {
    // Clone the current comment data state
    const updatedCommentData = commentDataState.map((comment) => {
      if (comment.id === postId) {
        // Check if replyId is provided
        if (replyId !== undefined) {
          // Update the specific reply's like
          const updatedReplies = comment.replys.map((reply) => {
            if (reply.id === replyId) {
              return {
                ...reply,
                like: reply.is_liked ? reply.like - 1 : reply.like + 1,
                is_liked: !reply.is_liked,
              };
            }
            return reply;
          });

          return {
            ...comment,
            replys: updatedReplies,
          };
        } else {
          // Update the comment's like
          return {
            ...comment,
            like: comment.is_liked ? comment.like - 1 : comment.like + 1,
            is_liked: !comment.is_liked,
          };
        }
      }
      return comment;
    });

    // Update the state with the modified comment data
    setCommentDataState(updatedCommentData);
  };

  const handleComment = (e) => {
    e.preventDefault();
    console.log(e.target.comment.value);
    axios
      .post("url", { comment: e.target.comment.value })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const handleCommentReply = (e) => {
    e.preventDefault();
    const commentReplyData = e.target.commentReply.value;
    console.log(commentReplyData);
  };

  const handleNestedCommentReply = (e) => {
    e.preventDefault();
    const nestedCommentReplyData = e.target.nestedCommentReply.value;
    console.log(nestedCommentReplyData);
  };
  return (
    <div>
      {/* commet modal  */}
      {isOpenComment && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000056] z-50 ">
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[95%] md:w-[600px] lg:w-[700px] bg-white rounded-md absolute right-[50%] translate-x-1/2 top-[18%] md:top-[12%] flex flex-col justify-between "
          >
            {/* hade and body  */}
            <div className="bg-white">
              <div className=" flex justify-end items-center py-2 px-2 border-b">
                <button
                  type="button"
                  className=" text-2xl hover:bg-gray-100 p-1 rounded-full transition duration-150"
                  onClick={() => setIsOpenComment(false)}
                >
                  <IoClose />
                </button>
              </div>
              <div className="px-3">
                <div className="max-h-[450px] overflow-y-auto comment_scroll">
                  {commentData.map((data, key) => {
                    return (
                      <>
                        <div key={key} className="flex mt-2 pr-2">
                          <div className=" pr-2 mr-1 shrink-0 ">
                            <Image
                              className=" rounded-full"
                              height={16}
                              width={16}
                              src={toukir}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="bg-[#F0F2F5] py-1 px-2 rounded">
                              <p>
                                <span className="font-semibold  text-sm">
                                  {data.name}
                                </span>
                              </p>
                              <p className="mb-1 text-gray-800 leading-[1.3] text-sm">
                                {data.comment}
                              </p>
                            </div>
                            <div className="flex justify-between mt-1 text-sm font-medium text-gray-700 ml-3">
                              <div className="flex gap-5">
                                <span>18h</span>
                                <button
                                //   onClick={() => handleCommentLike(data.id)}
                                //   className={`${
                                //     data.is_liked && "text-rose-500"
                                //   }`}
                                >
                                  Like
                                </button>
                                <button
                                //   onClick={() => {
                                //     setCommentNestedReplyID(null);
                                //     setOpenCommentReplyID(data.id);
                                //   }}
                                >
                                  Reply
                                </button>
                              </div>
                              <div className="flex items-center gap-[2px]">
                                <p>{data.like}</p>
                                <FaHeart className="text-rose-600" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* comment reply  */}
                        {openCommentReplyID === data.id &&
                          !openCommentNestedReplyID && (
                            <form
                              onSubmit={handleCommentReply}
                              className="flex items-center bg-[#F0F2F5] w-[60%] relative left-32 top-1 mb-3"
                            >
                              <Image
                                className=" rounded-full"
                                height={16}
                                width={16}
                                src={toukir}
                                alt=""
                              />
                              <input
                                type="text"
                                id="commentReply"
                                className="w-full mt-1 outline-none  py-1 bg-[#F0F2F5] text-sm comment_ploaceholder"
                                placeholder={`Reply to ${data.name}`}
                              />
                              <button className=" text-xl hover:bg-[#d1d2d4] py-[14px] pr-3 pl-4 transition duration-200">
                                <IoSend />
                              </button>
                            </form>
                          )}

                        {/* nested comment  */}
                        <div className="ml-7">
                          {data.replys.map((reply, key) => {
                            return (
                              <>
                                <div key={key} className="flex mt-2">
                                  <div className=" pr-2 mr-1 shrink-0 ">
                                    <Image
                                      className=" rounded-full"
                                      height={12}
                                      width={12}
                                      src={toukir}
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <div className="bg-[#F0F2F5] py-1 px-2 rounded">
                                      <p>
                                        <span className="font-semibold  text-sm">
                                          {reply.name}
                                        </span>
                                      </p>
                                      <p className="mb-1 text-gray-800 leading-[1.3] text-sm">
                                        {reply.comment}
                                      </p>
                                    </div>
                                    <div className="flex gap-10 justify-between mt-1 text-sm font-medium text-gray-700 ml-3">
                                      <div className="flex gap-5">
                                        <span>18h</span>
                                        <button
                                          onClick={() =>
                                            handleCommentLike(data.id, reply.id)
                                          }
                                          className={`${
                                            reply.is_liked && "text-rose-500"
                                          }`}
                                        >
                                          Like
                                        </button>
                                        <button>Reply</button>
                                      </div>
                                      <div className="flex items-center gap-[2px]">
                                        <p>{reply.like}</p>
                                        <FaHeart className="text-rose-600" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {openCommentReplyID === data.id &&
                                  openCommentNestedReplyID === reply.id && (
                                    <form
                                      onSubmit={handleNestedCommentReply}
                                      className="flex items-center bg-[#F0F2F5] w-[60%] relative left-32 top-1 mb-3"
                                    >
                                      <Image
                                        className=" rounded-full"
                                        height={12}
                                        width={12}
                                        src={toukir}
                                        alt=""
                                      />
                                      <input
                                        type="text"
                                        id="nestedCommentReply"
                                        className="w-full mt-1 outline-none  py-1 bg-[#F0F2F5] text-sm comment_ploaceholder"
                                        placeholder={`Reply to ${reply.name}`}
                                      />
                                      <button className=" text-xl hover:bg-[#d1d2d4] py-[14px] pr-3 pl-4 transition duration-200">
                                        <IoSend />
                                      </button>
                                    </form>
                                  )}
                              </>
                            );
                          })}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div>
                <form
                  onSubmit={handleComment}
                  className="flex items-center bg-[#F0F2F5]"
                >
                  <Image
                    className=" rounded-full"
                    height={16}
                    width={16}
                    src={toukir}
                    alt=""
                  />
                  <input
                    type="text"
                    id="comment"
                    className="w-full mt-1 outline-none  py-3 bg-[#F0F2F5] text-sm comment_ploaceholder"
                    placeholder="Write a comment..."
                  />
                  <button className=" text-xl hover:bg-[#d1d2d4] py-[17px] pr-3 pl-4 transition duration-200">
                    <IoSend />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* share modal  */}
      {isOpenShare && (
        <div
          //   onClick={() => {
          //     setIsOpenshare(false);
          //     setIsHideNav(true);
          //   }}
          className="fixed top-0 left-0 w-screen h-screen bg-[#00000056] z-50 "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" p-4 h-[230px] w-[95%] md:w-[700px] lg:w-[800px]  bg-white rounded-md absolute right-[50%] translate-x-1/2 bottom-[65px] top-[12%] flex flex-col z-10 "
          >
            <div className="flex gap-2 items-center">
              <Image
                className=" rounded-full"
                height={16}
                width={16}
                src={toukir}
                alt=""
              />
              <div>
                <p className="font-medium">Toukir Ahmed</p>
                <p className="text-gray-600 text-sm">toukir4585@gmail.com</p>
              </div>
            </div>
            <form>
              <textarea
                style={{ resize: "none" }}
                className="border rounded outline-none w-full  mt-2 px-2 py-2"
                rows={4}
                id=""
                placeholder="Say something about this..."
              ></textarea>
              <div className="w-full flex justify-end mt-1 items-center gap-4">
                <button>
                  <FaFacebookSquare className="text-2xl text-blue-600" />
                </button>
                <button>
                  <FaTwitter className="text-2xl text-[#1A8CD8]" />
                </button>
                <button>
                  <FaInstagramSquare className="text-2xl text-[#F03E58]" />
                </button>
                <button>
                  <FaLinkedin className="text-2xl text-[#0A66C2]" />
                </button>

                <button className="bg-black text-white py-1 px-4 rounded-full text-sm">
                  Share Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
