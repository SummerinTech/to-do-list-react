import React, { useState } from "react";

const InputArea = ({ onAdd }) => {
	const [inputText, setInputText] = useState("");

	function addItem() {
		setInputText("");
		onAdd(inputText);
	}

	return (
		<div className="InputArea">
			<input
				onChange={(e) => setInputText(e.target.value)}
				type="text"
				value={inputText}
			/>
			<button onClick={addItem} type="Submit">
				Add
			</button>
		</div>
	);
};

export default InputArea;
