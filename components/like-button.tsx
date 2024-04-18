"use client";
import { HandThumbUpIcon as OutlineHandThumbUpIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { useOptimistic } from "react";
import { dislikePost, likePost } from "@/app/posts/[id]/actions";

interface LikeButtonProps {
  isLiked: boolean;
  likeCount: number;
  postId: number;
}

const LikeButton = ({ isLiked, likeCount, postId }: LikeButtonProps) => {
  const [state, reducerFn] = useOptimistic(
    { isLiked, likeCount },
    (prevState, payload) => ({
      isLiked: !prevState.isLiked,
      likeCount: prevState.isLiked
        ? prevState.likeCount - 1
        : prevState.likeCount + 1,
    }),
  );
  const onClick = async () => {
    reducerFn(undefined);
    if (isLiked) {
      await dislikePost(Number(postId));
    } else {
      await likePost(Number(postId));
    }
  };
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-neutral-400 text-sm border border-neutral-400 rounded-full p-2  transition-colors ${
        state.isLiked
          ? "bg-orange-500 text-white border-orange-500"
          : "hover:bg-neutral-800"
      }`}
    >
      {state.isLiked ? (
        <HandThumbUpIcon className="size-5" />
      ) : (
        <OutlineHandThumbUpIcon className="size-5" />
      )}
      {state.isLiked ? (
        <span> {state.likeCount}</span>
      ) : (
        <span>공감하기 ({state.likeCount})</span>
      )}
    </button>
  );
};
export default LikeButton;
