import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{/* <Route path="/login" element={<SignIn />} /> */}
			{/* <Route path="/profile" element={<User />} /> */}
			{/* path="*" fonctionne si l'url n'est pas bonne */}
			{/* <Route path="*" element={<Page404 />} /> */}
		</Routes>
	);
};

export default Router;
