import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const SwitchLabel = ({ name }) => {
	return (
		<FormGroup>
			<FormControlLabel
				control={<Switch defaultChecked />}
				label={name}
			/>
		</FormGroup>
	);
};

export default SwitchLabel;
