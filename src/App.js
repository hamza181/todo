import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import {db} from './firebase'
import firebase from 'firebase'

function App() {
	const [ todos, setTodos ] = useState([]);
	const [ input, setInput ] = useState('');

	useEffect(() => {
		// jab bhi app reload hogi ye 1 bar dubara chale ga

		db.collection('todos').onSnapshot(snapshot =>{
			setTodos(snapshot.docs.map(doc =>doc.data().todo))
		})
	},
	// array is empty it means har rerender par use effect ka code chale ga
	// agar niche array ma agar koi variable name dal den to sirf us variable k change par rerender hoga 
	[])

	const addTodo = (event) => {
		//	form submit par ye function chale ga

		event.preventDefault(); // stop refresh the page on click

		db.collection('todos').add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp() 	// sort todos according to firebase server time
		})

		// setTodos([ ...todos, input ]);

		setInput(''); // value submit k bad input empty kar dega
	};

	return (
		<div className="App">
			<form>
				<h1>Todo App</h1>
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
