import React from "react";
import Services from "./Services";

const Service = () => {
	return (
		<div className="container my-12 md:my-24" id="uslugi">
			<p className="text-sm flex items-center gap-3">
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					data-aos="zoom-in"
					data-aos-delay="600"
					className="shadow-xl"
				>
					<path
						d="M0.177002 8C0.177002 3.85786 3.53487 0.5 7.677 0.5V0.5C11.8191 0.5 15.177 3.85786 15.177 8V8C15.177 12.1421 11.8191 15.5 7.677 15.5V15.5C3.53487 15.5 0.177002 12.1421 0.177002 8V8Z"
						fill="#AC3931"
					/>
				</svg>
				<span data-aos="fade-left">Zrobimy rzeczy niemożliwe!</span>
			</p>
			<h2 className="mt-3" data-aos="fade-right" data-aos-delay="200">
				Poznaj nasze usługi
			</h2>
			<Services />
		</div>
	);
};

export default Service;
