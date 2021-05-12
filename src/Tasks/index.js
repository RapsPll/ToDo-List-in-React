import React from 'react';
import './style.css';

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li className={`tasks__item${task.done && props.hideDoneTasks ? ' tasks__item--hidden' : ''}`} >
                <button className="tasks__button tasks__button--toggleDone tasks__itemButton">{task.done ? '✔️' : ''}</button>
            <span className={`tasks__content${task.done ? ' tasks__content--done' : ''}`}>{task.content}</span>
            <button className="tasks__button tasks__button--remove tasks__itemButton tasks__itemButton--special">❌</button>
            </li>
        ))}
    </ul>
)

export default Tasks