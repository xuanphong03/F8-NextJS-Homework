"use client";
import { MdLanguage } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LocaleSwitcherButton() {
  const locale = useLocale();
  const router = useRouter();

  const handleSwitchLocale = async () => {
    const newLocale = locale === "vi" ? "en" : "vi";
    const response = await fetch("/api/locale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ locale: newLocale }),
    });
    if (response.ok) {
      router.refresh();
    }
  };

  return (
    <Button
      variant="flat"
      onClick={handleSwitchLocale}
      className="bg-blue-500 text-white font-bold flex gap-1 items-center"
    >
      <MdLanguage className="text-xl" /> {locale === "vi" ? "en" : "vi"}
    </Button>
  );
}
