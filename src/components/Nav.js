import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Nav = () => {
	return (
		<nav className="main-nav">
			<Logo />
			{
				<div>
					<NavLink className="main-nav-item" to={"/login"}>
						<i className="fa fa-user-circle"></i>
						Sign In
					</NavLink>
				</div>
			}
		</nav>
	);
};

export default Nav;
