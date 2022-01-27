import React from "react";

const ToDoList = ({ key, id, toDoItem }) => {
	return (
		<div className="ToDoList">
			<li>{toDoItem}</li>
		</div>
	);
};

export default ToDoList;
