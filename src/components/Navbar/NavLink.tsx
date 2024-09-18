import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";

export type NavLinkProps = {
	href: string;
	label: string;
	filled?: boolean;
	mobile?: boolean;
};

export default function NavLink({
	href,
	label,
	filled = false,
	mobile = false,
}: NavLinkProps) {
	return (
		<Link href={href}>
			<span
				className={cn(
					"transition-all hover:opacity-90 text-dark",
					filled
						? "bg-primary text-light hover:opacity-100 opacity-95 px-11 py-[10px] rounded-xl  shadow-xl"
						: "hover:text-primary",
					mobile && "text-lg",
				)}
			>
				{label}
			</span>
		</Link>
	);
}
