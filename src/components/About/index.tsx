import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const About = () => {
	return (
		<div className="bg-secondary py-12 md:py-24 mt-12 md:my-24">
			<div className="container grid md:grid-cols-2 gap-8">
				<Image width={561} height={652} alt="Adam" src="/adam.png" />
				<div className="space-y-6">
					<p className="text-sm flex items-center gap-3">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.177002 8C0.177002 3.85786 3.53487 0.5 7.677 0.5V0.5C11.8191 0.5 15.177 3.85786 15.177 8V8C15.177 12.1421 11.8191 15.5 7.677 15.5V15.5C3.53487 15.5 0.177002 12.1421 0.177002 8V8Z"
								fill="#AC3931"
							/>
						</svg>
						<span>Wejdź do głowy Twoich klientów!</span>
					</p>
					<h2>Cześć, jestem Adam!</h2>
					<p className="tracking-wide leading-normal">
						Zapraszam do współpracy. Zajmuję się tworzeniem logo i
						systemów identyfikacji firm. Projektowaniem zgodnie z
						wytycznymi gotowych systemów. Składem katalogów
						produktowych, wystawienniczych czy książek. Od składu po
						druk. Obsługą social media – facebook, instagram.
						Projektowaniem ulotek, mailingów, plakatów i wszystkiego
						co może pomóc Twojej firmie zostać zapamiętanym.
					</p>
					<ul className="tracking-wide space-y-3 text-sm list-disc list-inside">
						<li>Obsługa fanpage na facebooku i Instagrama</li>
						<li>Ulotki, wizytówki, plakaty</li>
						<li>Projektowanie logo i systemów wizualnych</li>
						<li>Projektowanie stron internetowych</li>
					</ul>
					<Button>Zobacz Moje Portfolio</Button>
				</div>
			</div>
		</div>
	);
};

export default About;
