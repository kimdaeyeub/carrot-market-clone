"use client";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const Modal = async ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  // TODO: close 버튼을 별도의 클라이언트 컴포넌트로 분리하기
  // TODO: 모달에 실제 데이터를 띄우기
  const onCloseClick = () => {
    router.back();
  };
  return (
    <div className="absolute w-full h-full bg-black bg-opacity-60 left-0 top-0 z-50 flex justify-center items-center">
      <div className="flex justify-center max-w-screen-sm w-full h-1/2">
        <button
          onClick={onCloseClick}
          className="absolute top-5 right-5 text-neutral-200"
        >
          <XMarkIcon className="size-10" />
        </button>
        <div className="aspect-square bg-neutral-700 text-neutral-200 rounded-md flex justify-center items-center">
          <PhotoIcon className="h-28" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
