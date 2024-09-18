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
				"bg-primary text-light rounded-lg px-10 py-3 md:text-lg hover:bg-primary/90 transition-all font-bold tracking-wider disabled:bg-primary/30 disabled:text-light/40 disabled:cursor-not-allowed  shadow-xl",
				rest.className,
			)}
		>
			<span data-aos="zoom-in" data-aos-delay="600">
				{children}
			</span>
		</button>
	);
};

export default Button;
