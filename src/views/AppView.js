import { Route, Routes } from "react-router-dom";
import { PawsandPathsDash } from "./PawsandPaths";
import { FoundersNotes } from "../founders-notes/FoundersNotes";

export const ApplicationViews = () => {
	const localPathsUser = localStorage.getItem("activeUser");
	const pathsUserObject = JSON.parse(localPathsUser);

	if (pathsUserObject) {
		return (
			<>
				<div>
					<Routes>
						<Route path="" element={<PawsandPathsDash />} />
						<Route path="/dashboard" element={<PawsandPathsDash />} />
						<Route path="/foundersnotes" element={<FoundersNotes />} />
					</Routes>
				</div>
			</>
		);
	}
};
