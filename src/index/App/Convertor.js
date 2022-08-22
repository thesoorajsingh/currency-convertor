import React, { useEffect, useState } from "react";
import "./Convertor/Convertor.css";
import {
	UncontrolledDropdown,
	InputGroup,
	Input,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import doubleArrow from "./Convertor/arrows.svg";
import { motion } from "framer-motion";

function Convertor() {
	const [from, setFrom] = useState("INR");
	const [to, setTo] = useState("USD");
	const [rates, setRates] = useState([]);
	const [apiData, setApiData] = useState({});
	const [current, setCurrent] = useState(1);
	const [calculated, setCalculated] = useState(1);

	console.log(apiData);

	const getRates = () => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "8d7dbf45e5mshb3fe3ea57d6323fp194daejsn8de1575cdec5",
				"X-RapidAPI-Host": "exchangerate-api.p.rapidapi.com",
			},
		};

		fetch("https://exchangerate-api.p.rapidapi.com/rapid/latest/USD", options)
			.then((response) => response.json())
			.then((response) => {
				setRates(Object.keys(response.rates));
				setApiData(response.rates);
			})
			.catch((err) => console.error(err));
	};

	const calculateRates = (from, to, current) => {
		return (1 / apiData[from]) * apiData[to] * current;
	};

	useEffect(() => {
		getRates();
	}, []);

	useEffect(() => {
		setCalculated(calculateRates(from, to, current)); //eslint-disable-next-line
	}, [from, current]);

	const handleFromChange = (e) => {
		console.log(e.target.textContent);
		setFrom(e.target.textContent);
	};

	const handleToChange = (e) => {
		setTo(e.target.textContent);
	};

	const handleInputChange = (e) => {
		setCurrent(e.target.value);
	};

	return (
		<>
			<motion.h1
				initial={{ opacity: 0, y: 400 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="header"
			>
				Beyond<span style={{ color: "#aeb368" }}>.</span>
			</motion.h1>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.2, delay: 1 }}
				className="inputContainer"
			>
				<InputGroup className="dropdownGroup">
					<Input
						value={current}
						onChange={handleInputChange}
						className="input"
						type="number"
					/>
					<UncontrolledDropdown>
						<DropdownToggle className="leftToggle" value={from} caret>
							{from}
						</DropdownToggle>
						<DropdownMenu className="dropdown-menu-dark" updateOnSelect={true}>
							{rates.map((rate) => (
								<DropdownItem key={rate} onClick={handleFromChange}>
									{rate}
								</DropdownItem>
							))}
						</DropdownMenu>
					</UncontrolledDropdown>
				</InputGroup>

				<motion.div
					initial={{ rotate: 0 }}
					animate={{ rotate: 180 }}
					transition={{ delay: 2, duration: 1 }}
				>
					<img src={doubleArrow} alt="double arrow" />
				</motion.div>

				<InputGroup className="dropdownGroup">
					<Input
						value={calculated}
						disabled
						className="input leftInput"
						type="number"
					/>
					<UncontrolledDropdown>
						<DropdownToggle className="rightToggle" value={to} caret>
							{to}
						</DropdownToggle>
						<DropdownMenu className="dropdown-menu-dark" updateOnSelect={true}>
							{rates.map((rate) => (
								<DropdownItem key={rate} onClick={handleToChange}>
									{rate}
								</DropdownItem>
							))}
						</DropdownMenu>
					</UncontrolledDropdown>
				</InputGroup>
			</motion.div>
		</>
	);
}

export default Convertor;
