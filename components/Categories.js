import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <main>
      <ul className="flex px-5 border-2 text-nowrap gap-5 text-lg font-medium items-center md:justify-center h-12 w-full overflow-x-scroll md:overflow-hidden">
        <li>
          <Link href={"/"}>T-Shirts</Link>
        </li>
        <li>
          <Link href={"/"}>Stickers</Link>
        </li>
        <li>
          <Link href={"/"}>Mugs & Cups</Link>
        </li>
        <li>
          <Link href={"/"}>Bottles</Link>
        </li>
        <li>
          <Link href={"/"}>Phone Covers</Link>
        </li>
        <li>
          <Link href={"/"}>Customize Your Own</Link>
        </li>
      </ul>
    </main>
  );
};

export default Categories;
