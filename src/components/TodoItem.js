import React from "react";
import "./../App.css";

const TodoItem = (props) => {

    const completedStyle = {
        fontStyle: "italic",
        textDecoration: "line-through",
        color: "#cdcdcd"
    }

    const incompletedStyle = {
        color: "green"
    }

    return (
        <div className="todoItem">
            <input onChange={() => props.handleChange(props.todosData.id)}
                type="checkbox"
                checked={props.todosData.completed} />
            <p style={props.todosData.completed ? completedStyle : incompletedStyle}>{props.todosData.text}</p>
        </div>
    );
}

export default TodoItem;