"use client";
import { FaComment, FaHeart, FaLongArrowAltUp } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import girl from "../../../public/toukir.jpg";
import toukir from "../../../public/toukir.jpg";
import { useEffect, useRef, useState } from "react";
// import { GlobalContext } from "../Providers/GlobalProvider";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import { IoSend } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDownLong, FaUpLong } from "react-icons/fa6";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import "lightgallery/css/lightgallery.css";
import LightGalleryImageView from "./LightGalleryImageView";
import { HiDotsHorizontal } from "react-icons/hi";
import { Dropdown, DropdownItem, DropdownMenu } from "@nextui-org/react";
import { getPosts } from "@/src/services/posts";

const postData = [
  {
    _id: 1,
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
    _id: 2,
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
    _id: 3,
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
    _id: 4,
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
    _id: 5,
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
    _id: 16,
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

export default async function ViewPost() {
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [isOpenShare, setIsOpenshare] = useState(false);
  const [commentDataState, setCommentDataState] = useState(commentData);
  const [openCommentReplyID, setOpenCommentReplyID] = useState(null);
  const [openCommentNestedReplyID, setCommentNestedReplyID] = useState(null);
  const [postId, setPostId] = useState(0);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !(
          event.target instanceof Node &&
          navbarRef.current.contains(event.target)
        )
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const items = [
    {
      key: "copy",
      label: "Copy",
    },
    {
      key: "edit",
      label: "Edit",
    },
    {
      key: "delete",
      label: "Delete",
    },
  ];

  const { data } = await getPosts();
  console.log(data);

  return (
    <div>
      {!postData.length && (
        <h3 className="text-2xl font-medium text-center mt-20 text-gray-400">
          No posts have been made yet!
        </h3>
      )}
      {postData.map((data: any, key: number) => {
        const images = data.post.images;
        return (
          <div key={key}>
            {!data.isShared && (
              <div
                className="my-4 shadow-md border-b border-gray-600"
                ref={navbarRef}
              >
                <div className="flex  justify-between">
                  <button className="flex gap-2 items-center p-2 cursor-pointer w-fit">
                    <Image
                      className=" rounded-full"
                      height={45}
                      width={45}
                      src={toukir}
                      alt=""
                    />
                    <div>
                      <p className="font-medium">{data.post.user.name}</p>
                      <p className="text-sm text-start text-green-500">
                        {dayjs(data.post.createdAt).fromNow()}
                      </p>
                    </div>
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => {
                        toggleDropdown();
                        setPostId(data._id);
                      }}
                      className="mr-8 relative"
                    >
                      <HiDotsHorizontal className="text-[20px] hover:text-green-500 transition duration-150" />
                    </button>
                    {isDropdownOpen && postId == data._id && (
                      <div className="rounded bg-white shadow-sm z-50 w-40 absolute flex flex-col -left-[170px]">
                        <Dropdown>
                          {[
                            <DropdownMenu
                              key="dropdown-menu"
                              aria-label="Dynamic Actions"
                              items={items}
                            >
                              {(item) => (
                                <DropdownItem
                                  key={item.key}
                                  color={
                                    item.key === "delete" ? "danger" : "default"
                                  }
                                  className={
                                    item.key === "delete" ? "text-danger" : ""
                                  }
                                >
                                  {item.label}
                                </DropdownItem>
                              )}
                            </DropdownMenu>,
                          ]}
                        </Dropdown>
                      </div>
                    )}
                  </div>
                </div>
                {/* <p className="ml-2 bg-[#2cd4264c] w-fit px-3 py-[2px] my-1 ">
                  Vegitable
                </p> */}
                <div className="ml-4 text-gray-400">
                  <div
                    dangerouslySetInnerHTML={{ __html: data.post.description }}
                  ></div>
                </div>
                <div className="w-[80%] mx-auto ">
                  <div className="flex justify-center pt-4 pb-2">
                    <div className="flex justify-center gap-1 pt-4 pb-2">
                      {/* LightGallery wrapper */}
                      <LightGalleryImageView images={images} />
                    </div>
                  </div>
                  <div className="flex justify-between mt-4 px-4  pb-4">
                    <button className="flex items-center gap-1">
                      {data.post.votes.upvote && (
                        <FaUpLong className="text-green-500 text-[20px]" />
                      )}
                      <p>{data.post.votes.upvote}</p>
                    </button>
                    <button className="flex items-center gap-1 hover:text-gray-400 transition duration-150">
                      {data.post.votes.upvote && (
                        <FaDownLong className=" text-[20px]" />
                      )}
                      <p>{data.post.votes.upvote}</p>
                    </button>
                    <button className="flex items-center gap-1 hover:text-gray-400 transition duration-150">
                      <FaComment />
                      <p>{data.comment}</p>
                    </button>
                    <button className="flex items-center gap-1 hover:text-gray-400 transition duration-150">
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
                        <p className="text-sm text-green-500">
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
                          <p className="text-sm text-green-500">
                            {dayjs(data.post.createdAt).fromNow()}
                          </p>
                        </div>
                      </button>

                      <p className="px-2 text-gray-400">
                        {data.post.description}
                      </p>
                      <div className="flex w-[90%] mx-auto justify-center pt-4 pb-8">
                        <LightGalleryImageView images={images} />
                      </div>
                    </div>
                    <div className="flex justify-between mt-4 px-16 pb-4">
                      <button className="flex items-center hover:text-gray-400 transition duration-150">
                        {data.post.votes.upvote && (
                          <FaUpLong className=" text-[20px]" />
                        )}
                        <p>{data.post.votes.upvote}</p>
                      </button>
                      <button className="flex items-center ">
                        {data.post.votes.downvote && (
                          <FaDownLong className="text-green-500 text-[20px]" />
                        )}
                        <p>{data.post.votes.downvote}</p>
                      </button>
                      <button className="flex items-center gap-1 hover:text-gray-400 transition duration-150">
                        <FaComment className="text-txt-200" />
                        <p>{data.post.comment}</p>
                      </button>
                      <button className="flex items-center gap-1 hover:text-gray-400 transition duration-150">
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
          </div>
        );
      })}
    </div>
  );
}
