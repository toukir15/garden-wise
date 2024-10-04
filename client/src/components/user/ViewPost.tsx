"use client";
import { FaComment, FaHeart, FaLongArrowAltUp } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import girl from "../../../public/toukir.jpg";
import toukir from "../../../public/toukir.jpg";
import { useState } from "react";
// import { GlobalContext } from "../Providers/GlobalProvider";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import { IoSend } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDownLong, FaUpLong } from "react-icons/fa6";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css"; // Optional: if you want to include thumbnails
import "lightgallery/css/lg-zoom.css"; // Optional: if you want to include zoom functionality
import Link from "next/link";

const postData = [
  {
    sharedUser: {
      name: "Ahmed Toukir",
      profilePhoto: toukir,
    },
    description: "Blockchain Beyond Bitcoin: Real-World Applications",
    comment: 40,
    votes: {
      upvote: 20,
      downvote: 10,
    },
    isShared: false,
    createdAt: "2024-10-03T18:01:24.777+00:00",
    post: {
      user: {
        _id: "dlkfdsl",
        name: "Toukir Ahmed",
        profilePhoto: toukir,
      },
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas obcaecati corporis repudiandae, laboriosam facere ratione essein totam omnis tempora eligendi similique odio hic nam.",
      createdAt: "2024-10-03T18:01:24.777+00:00",
      images: [
        "https://res.cloudinary.com/dnbxtcqiw/image/upload/v1728010622/6paygfiryz5-1728010642842-file-4c09f6d4-6c00-4aac-93ff-ecbd2aabd675%20-%20Copy.webp",
        "https://res.cloudinary.com/dnbxtcqiw/image/upload/v1728010622/6paygfiryz5-1728010642842-file-4c09f6d4-6c00-4aac-93ff-ecbd2aabd675%20-%20Copy.webp",
        "https://res.cloudinary.com/dnbxtcqiw/image/upload/v1728010622/6paygfiryz5-1728010642842-file-4c09f6d4-6c00-4aac-93ff-ecbd2aabd675%20-%20Copy.webp",
      ],
      votes: { upvote: 20, downvote: 10 },
      comment: 40,
      share: 10,
      is_liked: true,
    },
  },
  {
    sharedUser: {
      name: "Ahmed Toukir",
      profilePhoto: toukir,
    },
    description: "Blockchain Beyond Bitcoin: Real-World Applications",
    comment: 40,
    votes: {
      upvote: 20,
      downvote: 10,
    },
    isShared: false,
    createdAt: "2024-10-03T18:01:24.777+00:00",
    post: {
      user: {
        _id: "dlkfdsl",
        name: "Toukir Ahmed",
        profilePhoto: toukir,
      },
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas obcaecati corporis repudiandae, laboriosam facere ratione essein totam omnis tempora eligendi similique odio hic nam.",
      createdAt: "2024-10-03T18:01:24.777+00:00",
      images: [
        "https://res.cloudinary.com/dnbxtcqiw/image/upload/v1728010622/6paygfiryz5-1728010642842-file-4c09f6d4-6c00-4aac-93ff-ecbd2aabd675%20-%20Copy.webp",
        "https://res.cloudinary.com/dnbxtcqiw/image/upload/v1728010622/6paygfiryz5-1728010642842-file-4c09f6d4-6c00-4aac-93ff-ecbd2aabd675%20-%20Copy.webp",
        "https://res.cloudinary.com/dnbxtcqiw/image/upload/v1728010622/6paygfiryz5-1728010642842-file-4c09f6d4-6c00-4aac-93ff-ecbd2aabd675%20-%20Copy.webp",
        "https://res.cloudinary.com/dnbxtcqiw/image/upload/v1728010622/6paygfiryz5-1728010642842-file-4c09f6d4-6c00-4aac-93ff-ecbd2aabd675%20-%20Copy.webp",
        "https://res.cloudinary.com/dnbxtcqiw/image/upload/v1728010622/6paygfiryz5-1728010642842-file-4c09f6d4-6c00-4aac-93ff-ecbd2aabd675%20-%20Copy.webp",
      ],
      votes: { upvote: 20, downvote: 10 },
      comment: 40,
      share: 10,
      is_liked: true,
    },
  },
  {
    sharedUser: {
      name: "Ahmed Toukir",
      profilePhoto: toukir,
    },
    description: "Blockchain Beyond Bitcoin: Real-World Applications",
    comment: 40,
    votes: {
      upvote: 20,
      downvote: 10,
    },
    isShared: false,
    createdAt: "2024-10-03T18:01:24.777+00:00",
    post: {
      user: {
        _id: "dlkfdsl",
        name: "Toukir Ahmed",
        profilePhoto: toukir,
      },
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas obcaecati corporis repudiandae, laboriosam facere ratione essein totam omnis tempora eligendi similique odio hic nam.",
      createdAt: "2024-10-03T18:01:24.777+00:00",
      images: [
        "https://res.cloudinary.com/dnbxtcqiw/image/upload/v1728010622/6paygfiryz5-1728010642842-file-4c09f6d4-6c00-4aac-93ff-ecbd2aabd675%20-%20Copy.webp",
        "https://res.cloudinary.com/dnbxtcqiw/image/upload/v1728010622/6paygfiryz5-1728010642842-file-4c09f6d4-6c00-4aac-93ff-ecbd2aabd675%20-%20Copy.webp",
        "https://res.cloudinary.com/dnbxtcqiw/image/upload/v1728010622/6paygfiryz5-1728010642842-file-4c09f6d4-6c00-4aac-93ff-ecbd2aabd675%20-%20Copy.webp",
      ],
      votes: { upvote: 20, downvote: 10 },
      comment: 40,
      share: 10,
      is_liked: true,
    },
  },
  {
    sharedUser: {
      name: "Ahmed Toukir",
      profilePhoto: toukir,
    },
    description: "Blockchain Beyond Bitcoin: Real-World Applications",
    comment: 40,
    votes: {
      upvote: 20,
      downvote: 10,
    },
    isShared: false,
    createdAt: "2024-10-03T18:01:24.777+00:00",
    post: {
      user: {
        _id: "dlkfdsl",
        name: "Toukir Ahmed",
        profilePhoto: toukir,
      },
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas obcaecati corporis repudiandae, laboriosam facere ratione essein totam omnis tempora eligendi similique odio hic nam.",
      createdAt: "2024-10-03T18:01:24.777+00:00",
      images: [
        "https://res.cloudinary.com/dnbxtcqiw/image/upload/v1728010622/6paygfiryz5-1728010642842-file-4c09f6d4-6c00-4aac-93ff-ecbd2aabd675%20-%20Copy.webp",
        "https://res.cloudinary.com/dnbxtcqiw/image/upload/v1728010622/6paygfiryz5-1728010642842-file-4c09f6d4-6c00-4aac-93ff-ecbd2aabd675%20-%20Copy.webp",
      ],
      votes: { upvote: 20, downvote: 10 },
      comment: 40,
      share: 10,
      is_liked: true,
    },
  },
  {
    sharedUser: {
      name: "Ahmed Toukir",
      profilePhoto: toukir,
    },
    description: "Blockchain Beyond Bitcoin: Real-World Applications",
    comment: 40,
    votes: {
      upvote: 20,
      downvote: 10,
    },
    isShared: false,
    createdAt: "2024-10-03T18:01:24.777+00:00",
    post: {
      user: {
        _id: "dlkfdsl",
        name: "Toukir Ahmed",
        profilePhoto: toukir,
      },
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas obcaecati corporis repudiandae, laboriosam facere ratione essein totam omnis tempora eligendi similique odio hic nam.",
      createdAt: "2024-10-03T18:01:24.777+00:00",
      images: [
        "https://res.cloudinary.com/dnbxtcqiw/image/upload/v1728010622/6paygfiryz5-1728010642842-file-4c09f6d4-6c00-4aac-93ff-ecbd2aabd675%20-%20Copy.webp",
      ],
      votes: { upvote: 20, downvote: 10 },
      comment: 40,
      share: 10,
      is_liked: true,
    },
  },
  {
    sharedUser: {
      name: "Ahmed Toukir",
      profilePhoto: toukir,
    },
    description: "Blockchain Beyond Bitcoin: Real-World Applications",
    comment: 40,
    votes: {
      upvote: 20,
      downvote: 10,
    },
    isShared: true,
    createdAt: "2024-10-03T18:01:24.777+00:00",
    post: {
      user: {
        _id: "dlkfdsl",
        name: "Toukir Ahmed",
        profilePhoto: toukir,
      },
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas obcaecati corporis repudiandae, laboriosam facere ratione essein totam omnis tempora eligendi similique odio hic nam.",
      createdAt: "2024-10-03T18:01:24.777+00:00",
      votes: { upvote: 20, downvote: 10 },
      images: [toukir, toukir, toukir],
      comment: 40,
      share: 10,
    },
  },
];
const commentData = [
  {
    id: 1,
    img: toukir,
    name: "Toukir Ahmed",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas obcaecati corporis repudiandae, laboriosam facere ratione essein totam omnis tempora eligendi similique odio hic nam.",
    timeStamp: "6h",
    like: 10,
    is_liked: true,
    replys: [
      {
        id: 1,
        img: girl,
        name: "Najmun Nahar",
        comment: "loremlkdfsdkfsdkljfkl",
        timeStamp: "5h",
        like: 5,
        is_liked: false,
      },
      {
        id: 2,
        img: toukir,
        name: "Toukir Ahmed",
        comment: "loremlkdfsdkfsdkljfkl",
        timeStamp: "4h",
        like: 3,
        is_liked: true,
      },
    ],
  },
  {
    id: 2,
    img: toukir,
    name: "Toukir Ahmed",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas obcaecati corporis repudiandae, laboriosam facere ratione essein totam omnis tempora eligendi similique odio hic nam.",
    timeStamp: "6h",
    like: 5,
    is_liked: false,
    replys: [
      {
        id: 1,
        img: girl,
        name: "Najmun Nahar",
        comment: "loremlkdfsdkfsdkljfkl",
        timeStamp: "5h",
        like: 2,
        is_liked: true,
      },
      {
        id: 2,
        img: toukir,
        name: "Toukir Ahmed",
        comment: "loremlkdfsdkfsdkljfkl",
        timeStamp: "4h",
        like: 1,
        is_liked: false,
      },
    ],
  },
];

export default function ViewPost() {
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [isOpenShare, setIsOpenshare] = useState(false);
  const [commentDataState, setCommentDataState] = useState(commentData);
  const [openCommentReplyID, setOpenCommentReplyID] = useState(null);
  const [openCommentNestedReplyID, setCommentNestedReplyID] = useState(null);

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
      {!postData.length && (
        <h3 className="text-2xl font-medium text-center mt-20 text-gray-400">
          No posts have been made yet!
        </h3>
      )}
      {postData.map((data, key) => {
        return (
          <>
            {!data.isShared && (
              <div
                key={key}
                className="my-4 shadow-md border-b border-gray-600"
              >
                <button
                  //   onClick={() => {
                  //     setViewProfileData({
                  //       name: data.post.author_name,
                  //       img: data.post.author_img,
                  //       email: data.post.auhhor_email,
                  //     });
                  //     navigate("/profile/view-profile");
                  //     setSuggFollowStatus("unfollow");
                  //   }}
                  className="flex gap-2 items-center p-2 cursor-pointer w-fit"
                >
                  <Image
                    className=" rounded-full"
                    height={45}
                    width={45}
                    src={toukir}
                    alt=""
                  />
                  <div>
                    <p className="font-medium">{data.post.user.name}</p>
                    <p className="text-sm text-[#1d9bf0]">
                      {dayjs(data.post.createdAt).fromNow()}
                    </p>
                  </div>
                </button>

                <p className="px-2 text-gray-400 ">{data.post.description}</p>
                <div className="w-[80%] mx-auto ">
                  <div className="flex justify-center pt-4 pb-2">
                    <div className="flex justify-center gap-1 pt-4 pb-2">
                      {/* LightGallery wrapper */}
                      <LightGallery
                        elementClassNames={`grid ${data.post.images.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-1`}
                        mode="lg-fade"
                      >
                        {data.post.images.map((image, index) => (
                          <a
                            key={index}
                            className={`relative h-full ${
                              data.post.images.length === 3 && index === 0
                                ? "row-span-2"
                                : "row-span-1"
                            } ${index >= 4 ? "hidden lg:block" : ""}`}
                            href={image}
                          >
                            <Image
                              src={image}
                              height={500}
                              width={500}
                              className={`h-full object-cover ${index > 3 && "hidden"} `}
                              alt={`Image ${index + 1}`}
                            />
                            {index === 3 && data.post.images.length > 4 && (
                              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl">
                                +{data.post.images.length - 4} more
                              </div>
                            )}
                          </a>
                        ))}
                      </LightGallery>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4 px-4 pb-4">
                    <button className="flex items-center gap-1">
                      {data.post.votes.upvote && (
                        <FaUpLong className="text-rose-600 text-[20px]" />
                      )}
                      {!data.post.votes.upvote && (
                        <FaUpLong className="text-txt-200" />
                      )}
                      <p>{data.post.votes.upvote}</p>
                    </button>
                    <button className="flex items-center gap-1">
                      {data.post.votes.upvote && (
                        <FaDownLong className="text-rose-600 text-[20px]" />
                      )}
                      {!data.post.votes.upvote && (
                        <FaDownLong className="text-txt-200" />
                      )}
                      <p>{data.post.votes.upvote}</p>
                    </button>
                    <button
                      // onClick={() => {
                      //   setIsOpenComment(true);
                      //   setIsHideNav(false);
                      // }}
                      className="flex items-center gap-1"
                    >
                      <FaComment className="text-txt-200" />
                      <p>{data.comment}</p>
                    </button>
                    <button
                      // onClick={() => {
                      //   setIsOpenshare(true);
                      //   setIsHideNav(false);
                      // }}
                      className="flex items-center gap-1"
                    >
                      <IoIosShareAlt className="text-2xl text-txt-200" />
                      <p>{data.post.share}</p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {data.isShared && (
              <div
                key={key}
                className="mt-4 shadow-md border-b border-gray-600"
              >
                <div>
                  <>
                    <button className="flex gap-2 items-center p-2 cursor-pointer w-fit ">
                      <Image
                        className=" rounded-full"
                        height={45}
                        width={45}
                        src={toukir}
                        alt=""
                      />
                      <div>
                        <p className="font-medium">{data.sharedUser.name}</p>
                        <p className="text-sm text-[#1d9bf0]">
                          {dayjs(data.createdAt).fromNow()}
                        </p>
                      </div>
                    </button>
                    <p className="px-2 text-gray-400">{data.description}</p>
                  </>
                  <div className="">
                    <div className="mx-6 border border-gray-600 p-2 mt-2 rounded-lg">
                      <button className="  flex gap-2 items-center p-2 cursor-pointer w-fit ">
                        <Image
                          className=" rounded-full"
                          height={40}
                          width={40}
                          src={toukir}
                          alt=""
                        />
                        <div>
                          <p className="font-medium">{data.post.user?.name}</p>
                          <p className="text-sm text-[#1d9bf0]">
                            {dayjs(data.post.createdAt).fromNow()}
                          </p>
                        </div>
                      </button>

                      <p className="px-2 text-gray-400">
                        {data.post.description}
                      </p>
                      <div className="flex w-[90%] mx-auto justify-center pt-4 pb-8">
                        <LightGallery
                          elementClassNames={`grid ${data.post.images.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-1`}
                          mode="lg-fade"
                        >
                          {data.post.images.map((image, index) => (
                            <a
                              key={index}
                              className={`relative h-full ${
                                data.post.images.length === 3 && index === 0
                                  ? "row-span-2"
                                  : "row-span-1"
                              } ${index >= 4 ? "hidden lg:block" : ""}`}
                              href={image}
                            >
                              <Image
                                src={image}
                                height={500}
                                width={500}
                                className={`h-full object-cover ${index > 3 && "hidden"} `}
                                alt={`Image ${index + 1}`}
                              />
                              {index === 3 && data.post.images.length > 4 && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl">
                                  +{data.post.images.length - 4} more
                                </div>
                              )}
                            </a>
                          ))}
                        </LightGallery>
                      </div>
                    </div>
                    <div className="flex justify-between mt-4 px-16 pb-4">
                      <button className="flex items-center ">
                        {data.post.votes.upvote && (
                          <FaUpLong className="text-rose-600 text-[20px]" />
                        )}
                        {!data.post.votes.upvote && (
                          <FaUpLong className="text-txt-200" />
                        )}
                        <p>{data.post.votes.upvote}</p>
                      </button>
                      <button className="flex items-center ">
                        {data.post.votes.downvote && (
                          <FaDownLong className="text-rose-600 text-[20px]" />
                        )}
                        {!data.post.votes.downvote && <FaDownLong />}
                        <p>{data.post.votes.downvote}</p>
                      </button>
                      <button className="flex items-center gap-1">
                        <FaComment className="text-txt-200" />
                        <p>{data.post.comment}</p>
                      </button>
                      <button className="flex items-center gap-1">
                        <IoIosShareAlt className="text-2xl text-txt-200" />
                        <p>{data.post.share}</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* mobile follow request  */}
            {/* {key == 1 && (
              <div className="my-4 bg-white p-4 rounded-lg block lg:hidden">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {followSuggetionData.map((data, key) => {
                    return (
                      <SwiperSlide key={key}>
                        <div>
                          <img className="w-fit" src={data.img} alt="" />
                          <p className="pt-2 text-sm font-medium text-center">
                            {data.name}
                          </p>
                          <p className="text-center text-xs pb-2 text-primary-100">
                            {data.email}
                          </p>
                          <button className="bg-black py-[3px] text-sm text-white w-full">
                            Confirm
                          </button>
                          <button className=" border border-gray-700 hover:border-gray-900 text-gray-700 hover:text-gray-900 py-[3px] text-sm w-full mt-[6px]">
                            Delete
                          </button>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            )} */}
          </>
        );
      })}

      {/* commet modal  */}
      {isOpenComment && (
        <div
          //   onClick={() => {
          //     setIsOpenComment(false);
          //     setIsHideNav(true);
          //   }}
          className="fixed top-0 left-0 w-screen h-screen bg-[#00000056] z-50 "
        >
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
                                        <button
                                        //   onClick={() => {
                                        //     setOpenCommentReplyID(data.id);
                                        //     setCommentNestedReplyID(reply.id);
                                        //   }}
                                        >
                                          Reply
                                        </button>
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
