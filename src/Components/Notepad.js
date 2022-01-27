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

	function deleteItem(id) {
		setToDoItems((prevItems) => {
			return toDoItems.filter((item, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div className="Notepad">
			<header>
				<AppDate />
			</header>
			<InputArea onAdd={addToDoItem} />
			<ul>
				{toDoItems.map((item, index) => {
					return <ToDoList onDelete={deleteItem} id={index} toDoItem={item} />;
				})}
			</ul>
		</div>
	);
};

export default Notepad;
