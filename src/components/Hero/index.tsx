import Image from "next/image";
import React from "react";
import style from "./index.module.css";
import Button from "../ui/Button";

const Hero = () => {
	return (
		<div className="container flex flex-col md:grid md:grid-cols-2 gap-8">
			<div className="space-y-5 flex flex-col items-baseline justify-center order-2 md:order-first">
				<h1
					className="tracking-normal leading-tight"
					data-aos="fade-right"
				>
					Tworzymy Druk, Który{" "}
					<span
						className="text-primary"
						data-aos="zoom-out-down"
						data-aos-delay="800"
					>
						Inspiruje
					</span>
				</h1>
				<p
					className="max-w-md"
					data-aos="fade-right"
					data-aos-delay="200"
				>
					Od pomysłu do wydruku – oferujemy kompleksowe usługi
					graficzne i drukarskie, które wyróżnią Twoją markę.
					Precyzja, jakość i indywidualne podejście w każdym
					projekcie.
				</p>
				<Button
					data-aos="fade-right"
					data-aos-delay="400"
					className="bg-dark text-light hover:bg-dark/90"
				>
					Sprawdź Nasze Usługi
				</Button>
			</div>
			<div className={style.grid}>
				<div
					className="col-span-2 row-span-2 rounded-xl overflow-hidden relative shadow-xl"
					data-aos="fade-right"
				>
					<Image
						src="/hero-images/1.png"
						fill
						alt="Hero image 1"
						objectFit="cover"
					/>
				</div>
				<div
					className="col-span-2 row-span-1 rounded-xl overflow-hidden relative  shadow-xl"
					data-aos="fade-down"
					data-aos-delay="200"
				>
					<Image
						objectFit="cover"
						src="/hero-images/2.png"
						fill
						alt="Hero image 2"
					/>
				</div>
				<div
					className="col-span-1 row-span-1 rounded-xl overflow-hidden relative  shadow-xl"
					data-aos="fade-left"
					data-aos-delay="300"
				>
					<Image
						objectFit="cover"
						src="/hero-images/3.png"
						fill
						alt="Hero image 3"
					/>
				</div>
				<div
					className="col-span-1 row-span-1 rounded-xl overflow-hidden relative  shadow-xl"
					data-aos="fade-left"
					data-aos-delay="500"
				>
					<Image
						objectFit="cover"
						src="/hero-images/4.png"
						fill
						alt="Hero image 4"
					/>
				</div>
				<div
					className="hidden md:block col-span-4 row-span-2 rounded-xl overflow-hidden relative  shadow-xl"
					data-aos="fade-up"
					data-aos-delay="600"
				>
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
