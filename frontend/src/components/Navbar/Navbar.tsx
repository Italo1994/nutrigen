import { ReactNode } from "react";

interface NavbarProps {
    children?: ReactNode;
}

export function Navbar({children}: NavbarProps) {
    return (
        <nav className="w-full h-[6rem] text-[1.3rem] flex justify-between items-center pl-[2rem] pr-[2rem] lg:pr-[4rem]">
            {children}
        </nav>
    )
}