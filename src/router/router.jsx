import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { StateContext } from "../contexts/state.context";

import Landing from "../views/Landing/Landing";

const Router = () => {
	const { setCurrentSession } = useContext(StateContext);

	useEffect(() => {
		setCurrentSession(null);
	}, [setCurrentSession]);

	return (		
		<Routes>
			<Route path="/" element={<Landing />} />
		</Routes>		
	);
};

export default Router;
