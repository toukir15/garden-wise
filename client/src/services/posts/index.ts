"use server";
import { envConfig } from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createPost = async (postData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/posts", postData);
    return { data };
  } catch (error: any) {
    throw new Error(error);
  }
};

export const upvote = async (voteId: string) => {
  try {
    const { data } = await axiosInstance.patch(
      `/posts/comment/upvote/${voteId}`
    );
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const downvote = async (voteId: string) => {
  try {
    const { data } = await axiosInstance.patch(
      `/posts/comment/downvote/${voteId}`
    );
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
