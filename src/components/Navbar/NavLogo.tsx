import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavLogo() {
	return (
		<Link href="/">
			<Image
				className="max-w-[50%] md:max-w-[80%]"
				alt="Aha.pl logo"
				src="/logo.png"
				width={240}
				height={80}
			/>
		</Link>
	);
}
