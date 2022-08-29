import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInfos } from "../app/features/userSlice";
import userService from "../app/services/userService";

function User() {
	const token = useSelector((state) => state.user.token);
	const firstName = useSelector((state) => state.user.infos.firstName);
	const lastName = useSelector((state) => state.user.infos.lastName);
	const [firstNameForm, setFirstNameForm] = useState("");
	const [lastNameForm, setLastNameForm] = useState("");
	const [displayForm, setDisplayForm] = useState(false);
	const dispatch = useDispatch();

	const onFirstNameChange = (e) => {
		setFirstNameForm(e.target.value);
	};

	const onLastNameChange = (e) => {
		setLastNameForm(e.target.value);
	};

	useEffect(() => {
		try {
			const getInfos = async () => {
				const userData = await userService.getInfos(token);
				const { email, firstName, lastName, id } = userData;
				const infos = { email, firstName, lastName, id };
				dispatch(setInfos(infos));
				setFirstNameForm(firstName);
				setLastNameForm(lastName);
			};
			getInfos();
		} catch (e) {
			console.log(e);
		}
	}, [token]);

	const onEdit = () => {
		if (!displayForm) {
			setDisplayForm(true);
		}
	};

	const onSave = async (e) => {
		try {
			e.preventDefault();
			const updateUserData = await userService.updateInfos(
				firstNameForm,
				lastNameForm,
				token
			);
			const { firstName, lastName } = updateUserData;
			const infosUpdate = { firstName, lastName };
			dispatch(setInfos(infosUpdate));
			if (displayForm) {
				setDisplayForm(false);
			}
		} catch (e) {
			console.log(e);
		}
	};

	const onCancel = () => {
		if (displayForm) {
			setDisplayForm(false);
		}
	};

	return (
		<div>
			<main className="main bg-dark">
				<div className="header">
					<h1>Welcome back</h1>
					{displayForm ? (
						<form>
							<input
								type="text"
								onChange={onFirstNameChange}
								value={firstNameForm}
								placeholder={firstNameForm}
							/>
							<input
								type="text"
								onChange={onLastNameChange}
								value={lastNameForm}
								placeholder={lastNameForm}
							/>
							<div>
								<button onClick={onSave} className="edit-button">
									Save
								</button>
								<button onClick={onCancel} className="edit-button">
									Cancel
								</button>
							</div>
						</form>
					) : (
						<div>
							<h1>
								{firstName} {lastName}!
							</h1>
							<button onClick={onEdit} className="edit-button">
								Edit Name
							</button>
						</div>
					)}
				</div>
				<h2 className="sr-only">Accounts</h2>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Checking (x8349)</h3>
						<p className="account-amount">$2,082.79</p>
						<p className="account-amount-description">Available Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<button className="transaction-button">View transactions</button>
					</div>
				</section>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Savings (x6712)</h3>
						<p className="account-amount">$10,928.42</p>
						<p className="account-amount-description">Available Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<button className="transaction-button">View transactions</button>
					</div>
				</section>
				<section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
						<p className="account-amount">$184.30</p>
						<p className="account-amount-description">Current Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<button className="transaction-button">View transactions</button>
					</div>
				</section>
			</main>
		</div>
	);
}

export default User;
