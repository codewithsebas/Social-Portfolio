import Head from "next/head";
import Portfolio from "./portfolio";
import {useState} from "react";

export default function Home() {

	const [mode, setMode] = useState(false)
	
	return (
		<>
			<Head>
				<title>Social Portfolio</title>
				<meta name="description" content="Welcome to my Social Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<Portfolio mode={mode} setMode={setMode} />
		</>
	);
}
