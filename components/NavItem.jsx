import React from "react";
import Image from "next/image";

const NavItem = ({ text }) => (
    <div className="flex gap-2 px-4 py-2 whitespace-nowrap bg-white rounded-lg border border-solid border-black border-opacity-10">
        <div>{text}</div>
        <Image src="/dropdown_down_icon.svg" width={18} height={18} alt="" className="shrink-0 self-start aspect-square" />
    </div>
);

export default NavItem;
