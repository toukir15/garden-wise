import axiosInstance from "@/src/lib/axiosInstance";
import { FieldValues } from "react-hook-form";

export const createPost = async (data: FieldValues) => {
  try {
    const res = await axiosInstance.post("/posts", data);
    console.log(res);
    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};
