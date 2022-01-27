import React, { useState } from "react";
import "../App.css";
import AppDate from "./AppDate";
import InputArea from "./InputArea";
import ToDoList from "./ToDoList";

const Notepad = () => {
	const [toDoItems, setToDoItems] = useState([]);

	function addToDoItem(inputText) {
		setToDoItems((prevItems) => {
			return [...prevItems, inputText];
		});
	}

	return (
		<div className="Notepad">
			<header>
				<AppDate />
			</header>
			<InputArea onAdd={addToDoItem} />
			{toDoItems.map((item, index) => {
				return <ToDoList id={index} toDoItem={item} />;
			})}
		</div>
	);
};

export default Notepad;
