"use client";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
}
const Button = ({ text }: ButtonProps) => {
  // 이 훅은 form의 자식요소에서만 사용가능
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {pending ? "로딩중..." : text}
    </button>
  );
};

export default Button;
