import Image from "next/image";

export default function Realisations() {
	return (
		<main className="container md:my-12 mb-12">
			<div className="space-y-4">
				<p className="text-sm flex items-center gap-3">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						data-aos="zoom-in"
						data-aos-delay="600"
					>
						<path
							d="M0.177002 8C0.177002 3.85786 3.53487 0.5 7.677 0.5V0.5C11.8191 0.5 15.177 3.85786 15.177 8V8C15.177 12.1421 11.8191 15.5 7.677 15.5V15.5C3.53487 15.5 0.177002 12.1421 0.177002 8V8Z"
							fill="#AC3931"
						/>
					</svg>
					<span data-aos="fade-left">
						Profesjonalne oklejanie witryn i reklamy przestrzenne,
						które przyciągają uwagę i budują rozpoznawalność Twojej
						marki.
					</span>
				</p>
				<h2 data-aos="fade-right">
					Reklama, Która{" "}
					<span
						className="text-primary"
						data-aos="zoom-out-down"
						data-aos-delay="800"
					>
						Wyróżnia
					</span>
				</h2>
			</div>
			<div className="grid md:grid-cols-2 gap-10 mt-12">
				<Image
					src="/portfolio/7.png"
					alt="Realizacja 7"
					width={596}
					height={489}
					className="rounded-xl shadow-xl hover:scale-110 transition-all"
					data-aos="flip-down"
					data-aos-delay="200"
				/>
				<Image
					src="/portfolio/8.png"
					alt="Realizacja 8"
					width={596}
					height={489}
					className="rounded-xl shadow-xl hover:scale-110 transition-all"
					data-aos="flip-down"
					data-aos-delay="300"
				/>
				<Image
					src="/portfolio/9.png"
					alt="Realizacja 9"
					width={596}
					height={489}
					className="rounded-xl shadow-xl hover:scale-110 transition-all"
					data-aos="flip-down"
					data-aos-delay="400"
				/>
				<Image
					src="/portfolio/10.png"
					alt="Realizacja 10"
					width={596}
					height={489}
					className="rounded-xl shadow-xl hover:scale-110 transition-all"
					data-aos="flip-down"
					data-aos-delay="500"
				/>
				<Image
					src="/portfolio/11.png"
					alt="Realizacja 1"
					width={596}
					height={489}
					className="rounded-xl shadow-xl hover:scale-110 transition-all"
					data-aos="flip-down"
				/>
				<Image
					src="/portfolio/12.png"
					alt="Realizacja 12"
					width={596}
					height={489}
					className="rounded-xl shadow-xl hover:scale-110 transition-all"
					data-aos="flip-down"
				/>
			</div>
		</main>
	);
}
