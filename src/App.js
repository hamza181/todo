import './App.css';
import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';

function App() {
	const [ todos, setTodos ] = useState([ 'a', 'b' ]);
	const [ input, setInput ] = useState('');

	const addTodo = (event) => {
		//	form submit par ye function chale ga

		event.preventDefault(); // stop refresh the page on click

		console.log('asdf');
		setTodos([ ...todos, input ]);

		setInput(''); // value submit k bad input empty kar dega
	};

	return (
		<div className="App">
			<form>
				<h1>Hello</h1>
				{/* <input /> */}
				{/* <button type="submit" onClick={addTodo}>
					Add Todo
				</button> */}

				<FormControl>
					<InputLabel>Write a Todo</InputLabel>
					<Input value={input} onChange={(event) => setInput(event.target.value)}/>
					
				</FormControl>

				<Button variant="contained" color="primary" type="submit" onClick={addTodo} disabled={!input}>
					Add Todo
				</Button>
			</form>

			<ul>
				{todos.map((todo) => {
					// return <li>{todo}</li>;
					return <Todo text={todo}></Todo>;
				})}
			</ul>
		</div>
	);
}

export default App;
