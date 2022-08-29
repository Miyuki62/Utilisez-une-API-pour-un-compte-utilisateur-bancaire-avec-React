import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { setInfos, setToken } from "../app/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";

function Nav() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const firstName = useSelector((state) => state.user.infos.firstName);
	const token = useSelector((state) => state.user.token);

	const onSignOut = () => {
		dispatch(setToken(""));
		dispatch(setInfos({}));
		navigate("/");
	};
	return (
		<nav className="main-nav">
			<Logo />
			{token ? (
				<div className="nav-signin">
					<NavLink to={`/profile`} className="main-nav-item">
						<i className="fa fa-user-circle"></i>
						<p className="nav-text">{firstName}</p>
					</NavLink>

					<a onClick={onSignOut} className="main-nav-item">
						<i className="fas fa-sign-out-alt"></i>
						<p className="nav-text">Sign Out</p>
					</a>
				</div>
			) : (
				<NavLink to={`/login`} className="main-nav-item">
					<i className="fa fa-user-circle"></i>
					<p className="nav-text">Sign In</p>
				</NavLink>
			)}
		</nav>
	);
}

export default Nav;
