import Image from "next/image";
import React from "react";
import style from "./index.module.css";
import Button from "../ui/Button";

const Hero = () => {
	return (
		<div className="container flex flex-col md:grid md:grid-cols-2 gap-8">
			<div className="space-y-5 flex flex-col items-baseline justify-center order-2 md:order-first">
				<h1 className="tracking-normal leading-tight">
					Tworzymy Druk, Który{" "}
					<span className="text-primary">Inspiruje</span>
				</h1>
				<p className="max-w-md">
					Od pomysłu do wydruku – oferujemy kompleksowe usługi
					graficzne i drukarskie, które wyróżnią Twoją markę.
					Precyzja, jakość i indywidualne podejście w każdym
					projekcie.
				</p>
				<Button className="bg-dark text-light hover:bg-dark/90">
					Sprawdź Nasze Usługi
				</Button>
			</div>
			<div className={style.grid}>
				<div className="col-span-2 row-span-2 rounded-xl overflow-hidden relative">
					<Image
						src="/hero-images/1.png"
						fill
						alt="Hero image 1"
						objectFit="cover"
					/>
				</div>
				<div className="col-span-2 row-span-1 rounded-xl overflow-hidden relative">
					<Image
						objectFit="cover"
						src="/hero-images/2.png"
						fill
						alt="Hero image 2"
					/>
				</div>
				<div className="col-span-1 row-span-1 rounded-xl overflow-hidden relative">
					<Image
						objectFit="cover"
						src="/hero-images/3.png"
						fill
						alt="Hero image 3"
					/>
				</div>
				<div className="col-span-1 row-span-1 rounded-xl overflow-hidden relative">
					<Image
						objectFit="cover"
						src="/hero-images/4.png"
						fill
						alt="Hero image 4"
					/>
				</div>
				<div className="hidden md:block col-span-4 row-span-2 rounded-xl overflow-hidden relative">
					<Image
						objectFit="cover"
						src="/hero-images/5.png"
						fill
						alt="Hero image 5"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
