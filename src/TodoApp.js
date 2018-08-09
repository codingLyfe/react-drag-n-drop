import React, {Component} from 'react';
import sytle from './css/app.css';

let todos = [
	{
	  todoTitle: 'First todo',
		todoDescription: 'Some kind of description',
		lane: 'current',
		id: '1'
	},
	{
	  todoTitle: 'Another todo',
		todoDescription: 'Another description',
		lane: 'future',
		id: '2'
	},
	{
	  todoTitle: 'And another',
		todoDescription: 'Does it matter?',
		lane: 'repeat',
		id: '3'
	},
	{
	  todoTitle: 'Currently something to do',
		todoDescription: 'It should be CURRENT',
		lane: 'current', 
		id: '4'
	},
	{
		todoTitle: 'Hopefully  Done',
		  todoDescription: 'It should be completed',
		  lane: 'complete', 
		  id: '5'
	}
];

export default class TodoApp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			todos,
			currentTodos: [],
			futureTodos: [],
			repeatTodos: [],
			completedTodos: [],
			mouseX: 0,
			mouseY: 0
		};

		this.setLanes = this.setLanes.bind(this);
	}

	componentDidMount() {
		window.addEventListener('load', this.setLanes);
		window.addEventListener('mouseup', this.setLanes);
		// window.addEventListener('mousemove', this.handleMouseMove);
	}

	setLanes() {

		let newFutureTodos = [];
		let newCurrentTodos = [];
		let newRepeatTodos = [];
		let newCompletedTodos = [];
		let previousFutureTodos = this.state.futureTodos.slice();
		let previousCurrentTodos = this.state.currentTodos.slice();
		let previousRepeatTodos = this.state.repeatTodos.slice();
		let previousCompletedTodos = this.state.completedTodos.slice();

		// loops through Todos and places them in the correct array
		this.state.todos.forEach(function(todo) {
			if (todo.lane ===	 'repeat') {
				newRepeatTodos.push(todo);
			}
			
			if (todo.lane === 'current') {
				newCurrentTodos.push(todo);	
			}

			if (todo.lane === 'complete') {
				newCompletedTodos.push(todo);
			}
			if (todo.lane === 'future') {
				newFutureTodos.push(todo);
			}

		})

		/**
		 * Takes respective arrays and sets a new state depending on the colomn
		 * 
		 * This allows for the drag and drop to re-build the columns
		 */
		
		// lane 0
		if ((this.state.futureTodos !== previousFutureTodos) || (this.state.futureTodos.length === 0)) {	
			this.setState ({
				futureTodos: newFutureTodos
			})
		}
		// lane 1
		if ((this.state.repeatTodos !== previousRepeatTodos) || (this.state.repeatTodos.length === 0)) {	
			this.setState ({
				repeatTodos: newRepeatTodos
			})			
		}
		// lane 2
		if ((this.state.currentTodos !== previousCurrentTodos) || (this.state.currentTodos.length === 0)) {	
			this.setState ({
				currentTodos: newCurrentTodos
			})	
		}
		// lane 3
		if ((this.state.completedTodos !== previousCompletedTodos) || (this.state.completedTodos.length === 0)) {
			this.setState ({
				completedTodos: newCompletedTodos
			})
		}
		return this.state;		
	}

	// handleMouseMove(e) {
	// 	this.setState ({
	// 		mouseX: e.nativeEvent.offsetX,
	// 		mouseY: e.nativeEvent.offsetY
	// 	})
	// }

	render() {
		
		// const posX = this.state.mouseX;
		// const posY = this.state.mouseY;

			return (
				<div className="container">
				
					<div className="row">
						<h5 className="center-todos">Total Todo Count: <span className="badge center-todo-text">{this.state.todos.length}</span></h5>
					</div>

					{/* <div onMouseMove= {this.handleMouseMove.bind(this)}>
						<p>Mouse Coordinates: {posX} {posY}</p>
					</div> */}

					<div className="row">

						<div className="col">
							<p>Future Todos: {this.state.futureTodos.length}</p>
							<ul className="list-group">
								{this.state.futureTodos.map((futureTodo, index2) =>
									<li className="list-group-item" key="{index4}">
										<h5 className="list-group-item-heading"><strong>{futureTodo.todoTitle}</strong></h5>
										<p>{futureTodo.todoDescription}</p>
									</li>
								)}
							</ul>
						</div>
					
						<div className="col">
							<p>Current Todos: {this.state.currentTodos.length}</p>
							<ul className="list-group">
								{this.state.currentTodos.map((currentTodo, index2) =>
									<li className="list-group-item" key="{index2}">
										<h5 className="list-group-item-heading"><strong>{currentTodo.todoTitle}</strong></h5>
										<p>{currentTodo.todoDescription}</p>
									</li>
								)}
							</ul>
						</div>

						<div className="col">
							<p>Repeat Todos: {this.state.repeatTodos.length}</p>
								<ul className="list-group">
									{this.state.repeatTodos.map((repeatTodo, index) =>
										<li className="list-group-item" key="{index}">
											<h5 className="list-group-item-heading"><strong>{repeatTodo.todoTitle}</strong></h5>
											<p>{repeatTodo.todoDescription}</p>
										</li>
									)}
								</ul>
						</div>

						<div className="col">
								<p>Completed: {this.state.completedTodos.length}</p>
								<ul className="list-group">
									{this.state.completedTodos.map((completedTodo, index3) =>
										<li className="list-group-item" key="{index3}">
											<h5 className="list-group-item-heading"><strong>{completedTodo.todoTitle}</strong></h5>
											<p>{completedTodo.todoDescription}</p>
										</li>
									)}
								</ul>
						</div>
					</div>
				</div>
			);
	}
}
