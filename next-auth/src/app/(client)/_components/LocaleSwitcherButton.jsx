"use client";
import { MdLanguage } from "react-icons/md";
import { Button } from "@nextui-org/react";

export default function LocaleSwitcherButton() {
  return (
    <Button
      variant="flat"
      className="bg-blue-500 text-white font-bold flex gap-1 items-center"
    >
      <MdLanguage className="text-xl" /> vi
    </Button>
  );
}
