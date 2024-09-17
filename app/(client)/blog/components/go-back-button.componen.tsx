"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const GoBackButton = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div onClick={goBack} className="flex items-center cursor-pointer">
      <Image
        className="cursor-pointer w-[20px] h-[20px]"
        src="/go-back-arrow.svg"
        width={20}
        height={20}
        alt="Volver"
      />
    </div>
  );
};
