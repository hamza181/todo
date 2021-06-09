import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, ImageIcon } from '@material-ui/core';
import './Todo.css'

function Todo(props) {
	return (
		<List className='todo_list'>
			<ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
				<ListItemText primary='Todo' secondary={props.text}/>
			</ListItem>
			{/* <li>{props.text}</li> */}
		</List>
	);
}

export default Todo;
