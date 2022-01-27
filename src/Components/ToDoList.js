import React from "react";

const ToDoList = ({ index, id, toDoItem }) => {
	return (
		<div key={index} className="ToDoList">
			<li>{toDoItem}</li>
		</div>
	);
};

export default ToDoList;
