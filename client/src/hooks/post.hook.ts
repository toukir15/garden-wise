import { useMutation } from "@tanstack/react-query";
import { createPost } from "../services/posts";
import { FieldValues } from "react-hook-form";

export const useCreatePost = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["POST"],
    mutationFn: async (data) => await createPost(data),
  });
};
