import React from "react";
import { withFormsy } from "formsy-react";

import SegmentedControl from "./SegmentedControl";

const FormsySegmentedControl = props => (
	<SegmentedControl
		{...props}
		setValue={val => {
			props.setValue && props.setValue(val);
			return props.setValue(val); // Formsy's setValue
		}}
	/>
);

export default withFormsy(FormsySegmentedControl);
