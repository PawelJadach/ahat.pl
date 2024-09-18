import { Metadata } from "next";

type Config = {
	metadata: {
		[key: string]: Metadata;
	};
	locale: string;
};

export const config: Config = {
	metadata: {
		root: {
			title: "Ahat.pl - advertising & publishing",
			description: "Druk który inspiruje",
			metadataBase: new URL("https://pixel-blaze.com/"),
			openGraph: {
				images: "/opengraph-image.png",
			},
		},
	},
	locale: "pl",
};
