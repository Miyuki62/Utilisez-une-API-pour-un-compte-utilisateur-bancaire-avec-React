import React from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import User from "../pages/User";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/profile" element={<User />} />
			{/* path="*" fonctionne si l'url n'est pas bonne */}
			<Route path="*" element={<Error404 />} />
		</Routes>
	);
};

export default Router;
