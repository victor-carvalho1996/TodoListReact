import React from "react";
import IconButton from "../template/IconButton";

function TodoList(props) {

    const renderRows = () => {
        const list = props.list || [];

        return list.map(todo => (
            <tr key={todo.id_todo}>
                <td className={todo.todo_active === 1 ? 'markedAsDone' : ''}>{todo.todo_text}</td>
                <td>
                    <IconButton style='success' icon='check'
                        onClick={() => props.handleMarkDone(todo)} hide={todo.todo_active === 1}></IconButton>
                    <IconButton style='warning' icon='undo'
                        onClick={() => props.handleMarkAsPending(todo)} hide={todo.todo_active === 0}></IconButton>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(todo)} hide={todo.todo_active === 0}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th className="tableActions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList