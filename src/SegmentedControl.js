import React, { useEffect } from "react";
import PropTypes from "prop-types";
import find from "lodash/find";
import extend from "lodash/extend";

import "./SegmentedControl.css";

const SegmentedControl = ({ className, name, options, style, setValue }) => {
	useEffect(() => {
		return () => {
			const defaultOption = find(options, { default: true });
			setValue(defaultOption.value);
		};
	});

	function setValue(val) {
		setValue && setValue(val);
	}

	const getId = option => name + option.value;

	const defaultStyle = {
		width: "100%"
	};

	const StyleComponent = extend(defaultStyle, style);

	let containerClassName = "segmented-control";
	if (typeof className !== "undefined") {
		containerClassName = `${containerClassName} ${className}`;
	}
	return (
		<div className={containerClassName} style={StyleComponent}>
			{options.map(option => (
				<input
					key={option.value}
					type='radio'
					name={name}
					id={getId(option)}
					defaultChecked={option.default}
					disabled={option.disabled}
				/>
			))}
			{options.map(option => (
				<label
					key={option.value}
					onClick={() => setValue(option.value)}
					htmlFor={getId(option)}
					data-value={option.label}>
					{option.label}
				</label>
			))}
		</div>
	);
};

export default SegmentedControl;

SegmentedControl.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	style: PropTypes.object,
	setValue: PropTypes.func
};
