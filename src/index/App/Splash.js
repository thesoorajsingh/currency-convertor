import React, { useState } from "react";
import "./Splash/Splash.css";
import { motion } from "framer-motion";

function Splash() {
	const [fade, setFade] = useState(false);

	setTimeout(() => {
		setFade(true);
	}, 4000);

	return (
		<motion.div class="box">
			<svg
				class={`w-full container ${fade ? "fade" : null}`}
				viewBox="41 21 40 39"
			>
				<defs>
					<linearGradient id="linearFill" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stop-color="#aeb368" />
						<stop offset="100%" stop-color="#216659" />
					</linearGradient>
					<linearGradient id="linearStroke" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stop-color="#069A8E" />
						<stop offset="100%" stop-color="#005555" />
					</linearGradient>
				</defs>

				<path
					class="path"
					fill="url(#linearFill)"
					fill-opacity="0"
					stroke="url(#linearStroke)"
					stroke-width="0.5"
					d="M 74.496 26.9548 C 70.8694 23.3282 66.048 21.3334 60.928 21.3334 C 55.7974 21.3334 50.976 23.3282 47.3494 26.9548 C 43.7226 30.5814 41.728 35.4028 41.728 40.5334 C 41.728 45.6642 43.7226 50.4854 47.3494 54.1122 C 50.976 57.7388 55.7974 59.7334 60.928 59.7334 C 66.0586 59.7334 70.88 57.7388 74.5066 54.1122 C 78.1334 50.4854 80.128 45.6642 80.128 40.5334 C 80.128 35.4028 78.1226 30.5814 74.496 26.9548 Z M 60.928 39.3282 C 63.904 39.3282 66.3254 41.7494 66.3254 44.7254 C 66.3254 47.1894 64.6614 49.2694 62.4 49.9202 C 62.24 49.9628 62.1226 50.1122 62.1226 50.2828 V 51.2962 C 62.1226 51.9468 61.6214 52.5014 60.9814 52.5334 C 60.288 52.5654 59.7226 52.0214 59.7226 51.3388 V 50.2934 C 59.7226 50.1228 59.6054 49.9734 59.4454 49.9308 C 57.1946 49.2908 55.5414 47.2214 55.52 44.7682 C 55.52 44.1174 56.032 43.5522 56.6826 43.5308 C 57.3654 43.5094 57.92 44.0534 57.92 44.7254 C 57.92 46.4534 59.3814 47.8402 61.1306 47.7228 C 62.6134 47.6162 63.808 46.4214 63.904 44.9494 C 64.0214 43.2002 62.6346 41.7388 60.9174 41.7388 C 57.9414 41.7388 55.52 39.3174 55.52 36.3414 C 55.52 33.8774 57.184 31.7974 59.4454 31.1468 C 59.6054 31.1042 59.7226 30.9548 59.7226 30.7842 V 29.7708 C 59.7226 29.1202 60.224 28.5654 60.864 28.5334 C 61.5574 28.5014 62.1226 29.0454 62.1226 29.7282 V 30.7734 C 62.1226 30.9442 62.24 31.0934 62.4 31.1362 C 64.6506 31.7762 66.304 33.8454 66.3254 36.2988 C 66.3254 36.9494 65.8134 37.5148 65.1626 37.5362 C 64.48 37.5574 63.9254 37.0134 63.9254 36.3414 C 63.9254 34.6134 62.464 33.2268 60.7146 33.3442 C 59.232 33.4508 58.0374 34.6454 57.9414 36.1174 C 57.8134 37.8668 59.2 39.3282 60.928 39.3282 Z"
				/>
			</svg>
		</motion.div>
	);
}

export default Splash;