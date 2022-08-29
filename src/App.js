import "./asset/css/main.css";
// import "./asset/css/normalize.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Router from "./utils/Router";

function App() {
	return (
		<div className="App">
			<Nav />
			<Router />
			<Footer />
		</div>
	);
}

export default App;
