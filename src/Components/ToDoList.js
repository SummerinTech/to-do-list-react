import React, { useState } from "react";

const ToDoList = ({ index, id, toDoItem, onDelete }) => {
	const [isFinished, setIsFinished] = useState(false);

	const addLineThrough = () => {
		setIsFinished((prevValue) => {
			return !prevValue;
		});
	};

	return (
		<div key={index} className="ToDoList" onClick={addLineThrough}>
			<li
				onDoubleClick={() => onDelete(id)}
				style={{ textDecoration: isFinished ? "line-through" : "none" }}
			>
				{toDoItem}
			</li>
		</div>
	);
};

export default ToDoList;
