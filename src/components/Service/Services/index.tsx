"use client";
import Button from "@/components/ui/Button";
import {
	DesignIcon,
	PrintIcon,
	SmIcon,
	UiUxDesignIcon,
} from "@/components/ui/Icons";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

const Services = () => {
	const [tab, setTab] = React.useState(0);

	const animation = "zoom-in";

	return (
		<>
			<div className="hidden md:block mt-16 pb-12 border-b-[1px] border-[#E9E9E9]">
				<div className="flex justify-around">
					<button
						onClick={() => setTab(0)}
						className="flex flex-col items-center gap-4 group"
						data-aos="flip-left"
						data-aos-delay="400"
					>
						<UiUxDesignIcon
							className={cn(
								tab === 0 ? "fill-primary" : "fill-dark",
								"group-hover:scale-110 transition-all",
							)}
						/>
						<h3>UI / UX Design</h3>
					</button>
					<button
						onClick={() => setTab(1)}
						className="flex flex-col items-center gap-4"
						data-aos="flip-left"
						data-aos-delay="600"
					>
						<DesignIcon
							className={cn(
								tab === 1 ? "fill-primary" : "fill-dark",
								"group-hover:scale-110 transition-all",
							)}
						/>
						<h3>Projektowanie</h3>
					</button>
					<button
						onClick={() => setTab(2)}
						className="flex flex-col items-center gap-4"
						data-aos="flip-left"
						data-aos-delay="800"
					>
						<SmIcon
							className={cn(
								tab === 2 ? "fill-primary" : "fill-dark",
								"group-hover:scale-110 transition-all",
							)}
						/>
						<h3>Obsługa SM</h3>
					</button>
					<button
						onClick={() => setTab(3)}
						className="flex flex-col items-center gap-4"
						data-aos="flip-left"
						data-aos-delay="1000"
					>
						<PrintIcon
							className={cn(
								tab === 3 ? "fill-primary" : "fill-dark",
								"group-hover:scale-110 transition-all",
							)}
						/>
						<h3>Druk</h3>
					</button>
				</div>
			</div>
			{tab === 0 && (
				<div
					className="hidden md:flex flex-col md:flex-row justify-center gap-12 h-[450px]"
					data-aos={animation}
				>
					<div className="space-y-3 max-w-md flex flex-col items-baseline justify-center">
						<h3>UI / UX</h3>
						<p className="text-sm">
							Tworzymy intuicyjne i estetyczne interfejsy, które
							poprawiają doświadczenie użytkowników i wspierają
							osiąganie celów Twojej marki.
						</p>
						<Button>Zleć stworzenie strony</Button>
					</div>
					<Image
						src="/services/ui-ux.jpg"
						alt="UI/UX Design"
						width={560}
						height={410}
						className="p-12"
					/>
				</div>
			)}
			{tab === 1 && (
				<div
					className="hidden md:flex justify-center gap-12  flex-col md:flex-row h-[450px]"
					data-aos={animation}
				>
					<div className="space-y-3 max-w-md flex flex-col items-baseline justify-center">
						<h3>Projektowanie</h3>
						<p className="text-sm">
							Od logo po materiały promocyjne – nasze kreatywne
							projekty graficzne wyróżnią Twoją markę i przyciągną
							uwagę odbiorców
						</p>
						<Button>Zleć projekt</Button>
					</div>
					<Image
						src="/services/design.png"
						alt="UI/UX Design"
						width={560}
						height={410}
						className="p-12"
					/>
				</div>
			)}
			{tab === 2 && (
				<div
					className="hidden md:flex justify-center gap-12  flex-col md:flex-row h-[450px]"
					data-aos={animation}
				>
					<div className="space-y-3 max-w-md flex flex-col items-baseline justify-center">
						<h3>Obsługa SM</h3>
						<p className="text-sm">
							Zbuduj silną obecność w mediach społecznościowych
							dzięki spersonalizowanej strategii i atrakcyjnym
							materiałom wizualnym.
						</p>
						<Button>Zleć prowadzenie</Button>
					</div>
					<Image
						src="/services/sm.png"
						alt="UI/UX Design"
						width={560}
						height={410}
						className="p-12"
					/>
				</div>
			)}
			{tab === 3 && (
				<div
					className="hidden md:flex justify-center gap-12  flex-col md:flex-row h-[450px]"
					data-aos={animation}
				>
					<div className="space-y-3 max-w-md flex flex-col items-baseline justify-center">
						<h3>Druk</h3>
						<p className="text-sm">
							Gwarantujemy wysokiej jakości druk, który idealnie
							oddaje każdy detal Twojego projektu – od wizytówek
							po duże formaty.
						</p>
						<Button>Zleć wydruk</Button>
					</div>
					<Image
						src="/services/print.png"
						alt="UI/UX Design"
						width={560}
						height={410}
						className="p-12"
					/>
				</div>
			)}

			<div className="md:hidden flex flex-col gap-10">
				<div
					className="flex flex-col md:flex-row justify-center gap-6"
					data-aos={animation}
				>
					<div className="space-y-3 max-w-md flex flex-col items-baseline justify-center">
						<h3>UI / UX</h3>
						<p className="text-sm">
							Tworzymy intuicyjne i estetyczne interfejsy, które
							poprawiają doświadczenie użytkowników i wspierają
							osiąganie celów Twojej marki.
						</p>
					</div>
					<Image
						src="/services/ui-ux.jpg"
						alt="UI/UX Design"
						width={560}
						height={410}
					/>
				</div>
				<div
					className="flex justify-center gap-6  flex-col md:flex-row"
					data-aos={animation}
				>
					<div className="space-y-3 max-w-md flex flex-col items-baseline justify-center">
						<h3>Projektowanie</h3>
						<p className="text-sm">
							Od logo po materiały promocyjne – nasze kreatywne
							projekty graficzne wyróżnią Twoją markę i przyciągną
							uwagę odbiorców
						</p>
					</div>
					<Image
						src="/services/design.png"
						alt="UI/UX Design"
						width={560}
						height={410}
					/>
				</div>
				<div
					className="flex justify-center gap-6  flex-col md:flex-row"
					data-aos={animation}
				>
					<div className="space-y-3 max-w-md flex flex-col items-baseline justify-center">
						<h3>Obsługa SM</h3>
						<p className="text-sm">
							Zbuduj silną obecność w mediach społecznościowych
							dzięki spersonalizowanej strategii i atrakcyjnym
							materiałom wizualnym.
						</p>
					</div>
					<Image
						src="/services/sm.png"
						alt="UI/UX Design"
						width={560}
						height={410}
					/>
				</div>
				<div
					className="flex justify-center gap-6  flex-col md:flex-row"
					data-aos={animation}
				>
					<div className="space-y-3 max-w-md flex flex-col items-baseline justify-center">
						<h3>Druk</h3>
						<p className="text-sm">
							Gwarantujemy wysokiej jakości druk, który idealnie
							oddaje każdy detal Twojego projektu – od wizytówek
							po duże formaty.
						</p>
					</div>
					<Image
						src="/services/print.png"
						alt="UI/UX Design"
						width={560}
						height={410}
					/>
					<Button>Skontaktuj się</Button>
				</div>
			</div>
		</>
	);
};

export default Services;
