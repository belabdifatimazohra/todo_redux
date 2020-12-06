import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useDispatch } from 'react-redux'
function Task({ task }) {
    // dispatch info state
    const dispatch = useDispatch();
    return (
        <div
            className={task.check ? "todo-row complete" : "todo-row"}
            key={task.id}
        >
            <div style={task.check ? {textDecoration:"line-through"}:{}}>
                {task.task}
            </div>
            <div className="icons">
                <RiCloseCircleLine

                    className="delete-icon"
                />
                <TiEdit className="edit-icon"
                //    onClick={(e) => {
                //       e.preventDefault();
                //       dispatch(editList({ id: uuidv4(), task: input, check: false })}}
                />
                <input type="checkbox" className="checkBox"
                    onClick={(e) => {
                        e.preventDefault(); task.check = true
                    }} />
            </div>
         
        </div>
    );
}

export default Task;
