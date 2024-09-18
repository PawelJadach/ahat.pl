"use client";
import { cn } from "@/utils/cn";
import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	specialProp?: string;
}

const Button = ({ children, ...rest }: ButtonProps) => {
	return (
		<button
			{...rest}
			className={cn(
				"bg-primary transition-all text-light rounded-lg px-10 py-3 hover:scale-95 hover:shadow-md md:text-lg font-bold tracking-wider shadow-xl",
			)}
		>
			{children}
		</button>
	);
};

export default Button;
