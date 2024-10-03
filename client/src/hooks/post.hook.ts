import { useMutation } from "@tanstack/react-query";
import { createPost } from "../services/posts";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreatePost = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["POST"],
    mutationFn: async (data) => await createPost(data),
    onMutate: () => {
      const toastId = toast.loading("Creating post...", {
        duration: Infinity,
        position: "top-right",
      });
      return { toastId };
    },
    onSuccess: (_data, _variables, context: any) => {
      toast.success("Post created successfully!", {
        id: context?.toastId,
        duration: 2000,
      });
    },
    onError: (_error, _variables, context: any) => {
      toast.error("Failed to create post. Please try again.", {
        id: context?.toastId,
        duration: 2000,
      });
    },
  });
};
