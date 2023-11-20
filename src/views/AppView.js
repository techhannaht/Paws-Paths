import { Route, Routes } from "react-router-dom";
import { PawsandPathsDash } from "./PawsandPaths";
import { FoundersNotes } from "../founders-notes/FoundersNotes";
import { MapWidget } from "../map/Map";

export const ApplicationViews = () => {
	const localPathsUser = localStorage.getItem("activeUser");
	const pathsUserObject = JSON.parse(localPathsUser);

	if (pathsUserObject) {
		return (
			<>
				<div>
					<Routes>
						<Route path="" element={<PawsandPathsDash />} />
						<Route path="/pathboard" element={<PawsandPathsDash />} />
						<Route path="/foundersnotes" element={<FoundersNotes />} />
						<Route path="/favorites" element={<MapWidget />} />
					</Routes>
				</div>
			</>
		);
	}
};
