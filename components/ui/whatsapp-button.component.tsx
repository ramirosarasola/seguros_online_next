"use client";
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <Image
      onClick={() => {
        window.open("https://wa.me/5491169945001", "_blank");
      }}
      className="cursor-pointer fixed bottom-4 right-4 z-50"
      src={"/whatsapp.png"}
      alt="whatsapp"
      width={50}
      height={50}
    />
  );
}
