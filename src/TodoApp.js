import React, {Component} from 'react';

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
	  todoTitle: 'currently',
		todoDescription: 'It should be CURRENT',
		lane: 'current', 
		id: '4'
	}
];


export default class TodoApp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			todos,
			currentTodos: [],
			futureTodos: [],
			repeatTodos: []
		};

		this.setLane1 = this.setLane1.bind(this); 
	}

	componentDidMount() {
		window.addEventListener('load', this.setLane1);
		window.addEventListener('mouseup', this.setLane1);
	}

	setLane1() {
		
		let newCurrentTodos =[];
		let previousCurrentTodos = this.state.currentTodos.slice();

		console.log(newCurrentTodos);
		console.log(previousCurrentTodos);

		
			this.state.todos.forEach(function(todo) {
				if (todo.lane === 'current') {
					newCurrentTodos.push(todo);	
				}
			})

			if ((this.state.currentTodos.length !== previousCurrentTodos.length) || (this.state.currentTodos.length === 0)) {	
				this.setState ({
					currentTodos: newCurrentTodos
				})
				
			}
			console.log(this.state);
			return this.state;
	}


	render() {
		
			return (
				<div className="container">
				
					<h5>Total Todo Count: <span className="badge">{this.state.todos.length}</span></h5>
					
					<div className="row">
						<div className="col">
						<p>Current Todos: {this.state.currentTodos.length}</p>
							<ul className="list-group">
								{this.state.currentTodos.map((currentTodo, index) =>
									<li className="list-group-item" key="{index}">
											<h5 className="list-group-item-heading">{currentTodo.todoTitle}</h5>
											<p>{currentTodo.todoDescription}</p>
									</li>
								)}
							</ul>
					</div>

					<div className="col">
						<p>Todos: {this.state.todos.length}</p>
							<ul className="list-group">
											{this.state.todos.map((todo, index) =>
												<li className="list-group-item" key="{index}">
														<h5 className="list-group-item-heading">{todo.todoTitle}</h5>
														<p>{todo.todoDescription}</p>
												</li>
								)}
							</ul>
						</div>
						
						<div className="col"></div>

					</div>
	
				</div>
			);
	}
}
