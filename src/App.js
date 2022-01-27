import "./App.css";
import Notepad from "./Components/Notepad";
import Footer from "./Components/Footer";

function App() {
	return (
		<div className="App">
			<h1>To Do List </h1>
			<Notepad />
			<Footer />
		</div>
	);
}

export default App;
