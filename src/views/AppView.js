import { Route, Routes } from "react-router-dom";
import { PawsandPathsDash } from "./PawsandPaths";

export const ApplicationViews = () => {
	const localPathsUser = localStorage.getItem("activeUser");
	const pathsUserObject = JSON.parse(localPathsUser);

	if (pathsUserObject) {
		return (
			<PawsandPathsDash/>
		);
	}
};
