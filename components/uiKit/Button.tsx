"use client";
import { useRouter } from "next/router";
import React, { MouseEvent } from "react";

const Button: React.FC<{}> = () => {
  const router = useRouter();

  const fn = () => {
    const input = document.getElementById("input");
    if (!input) {
      return;
    }
    router.push(`/pokemon/${input.value}`, undefined, { shallow: true });
  };
  return (
    <button
      className="bg-[#fecb05] px-4 py-2 rounded-lg  text-[#3865d2] text-xl font-bold"
      onClick={fn}
    >
      Search
    </button>
  );
};

export default Button;
