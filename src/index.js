import React from 'react';
import ReactDOM, {render}  from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

//main app
import TodoApp from './TodoApp';


ReactDOM.render(<TodoApp/> , document.getElementById('content'));