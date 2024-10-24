"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ThemeSwitcherButton() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const handleSwitchTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Button
        variant="flat"
        isIconOnly={true}
        className="flex items-center justify-center bg-teal-500 size-10 text-white rounded-xl text-xl"
      >
        <FaMoon />
      </Button>
    );

  return (
    <Button
      variant="flat"
      isIconOnly={true}
      onClick={handleSwitchTheme}
      className="flex items-center justify-center bg-teal-500 size-10 text-white rounded-xl text-xl"
    >
      {resolvedTheme === "dark" && <FaSun />}
      {resolvedTheme === "light" && <FaMoon />}
    </Button>
  );
}
