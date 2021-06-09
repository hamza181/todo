
import './App.css';
import React, { useState } from 'react';

function App() {
	const [ todos, setTodos ] = useState([ 'a', 'b' ]);
	const [input, setInput] = useState('')

	const addTodo = (event) =>{
		console.log("asdf");
		setTodos([...todos, input])
	}

	return (
		<div className="App">
			<h1>Hello</h1>
			<input value={input} onChange={event=>setInput(event.target.value)}/>
			<button onClick={addTodo}>Add Todo</button>



			<ul>
				{todos.map((todo) => {
					return <li>{todo}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;
