import React from 'react'


const Todos = ({ todos, deleteTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (<div className="collection-item " key={todo.id}>
                <p >{todo.content}
                    <span className="new badge blue" data-badge-caption="Remove" onClick={() => { deleteTodo(todo.id) }}></span>
                </p>
            </div>
            )
        })
    ) : (
            <p className="center"> You don't have any todo's left </p>
        );

    return (
        <div className="todo collection">
            {todoList}
        </div>
    );
}

export default Todos