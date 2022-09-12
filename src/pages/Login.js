import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../app/features/userSlice";
import userService from "../app/services/userService";

function Login() {
	const [email, setEmail] = useState("tony@stark.com");
	const [password, setPassword] = useState("password123");
	const [loginError, setLoginError] = useState();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const onSubmit = async (e) => {
		try {
			e.preventDefault();
			const token = await userService.login(email, password);
			if (token) {
				dispatch(setToken(token));
				navigate("/profile");
			}
		} catch (e) {
			console.log(e);
			setLoginError("connection error please check your email and password");
		}
	};

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							value={email}
							onChange={onEmailChange}
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={onPasswordChange}
						/>
						{loginError && (
							<p style={{ color: "red", textAlign: "left" }}>{loginError}</p>
						)}
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>

					<button onClick={onSubmit} className="sign-in-button">
						Sign In
					</button>
				</form>
			</section>
		</main>
	);
}

export default Login;
