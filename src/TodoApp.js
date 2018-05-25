import React, {Component} from 'react';

export default class TodoApp extends Component {
	render() {
		return (
			<div className="vertical-line">
				<h1>This will be a Drag and Drop Todo</h1>
				<ol>
					<li>Implement state</li>
					<li>Render a task</li>
					<li>Delete a task</li>
					<li>Start Drag and Drop</li>
				</ol>
			</div>
			
		);
	}
}