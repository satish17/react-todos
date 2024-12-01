import React, { useState } from 'react';

function Todo() {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, inputValue])
        setInputValue('')
    }

    function removeTod(value)
    {
        const filteredTodos = todos.filter(todo => todo != value)
        setTodos(filteredTodos)
    }
    return (
        <div>
            <h1>Todo List</h1>
            <form>
                <input type='text' value={inputValue} onChange={handleChange} />
                <button onClick={handleSubmit}>Add Todo</button>
            </form>
            <ol style={{width : 200 , textAlign : "left", marginLeft : '40%'}}>
                {todos.map((todo) => (
                    <li key={todo}>{todo} &nbsp;&nbsp;&nbsp;
                        <button onClick={(e)=>removeTod(todo)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Todo;