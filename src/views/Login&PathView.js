import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { NavBar } from "../navbar/NavBar";
import { ApplicationViews } from "./AppView";
import { Authorized } from "./Authorized";
import "./Dashboard.css"

function PawsandPaths() {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
	


			<Route
				path='*'
				element={
					<Authorized>
						<>
							<NavBar/>
							<ApplicationViews/>
						</>
					</Authorized>
				}
			/>
		</Routes>
	);
}

export default PawsandPaths;
