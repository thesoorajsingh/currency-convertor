import "./App/App.css";
import React, { useState, useEffect } from "react";
import Splash from "./App/Splash";
import Convertor from "./App/Convertor";
import { motion, AnimatePresence } from "framer-motion";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4200);
	}, []);

	return (
		<div className="App">
			<AnimatePresence>
				{loading ? (
					<motion.div
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
					>
						<Splash />{" "}
					</motion.div>
				) : (
					<motion.div
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
						}}
					>
						<Convertor />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default App;
