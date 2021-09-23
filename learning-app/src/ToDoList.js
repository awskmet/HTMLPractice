import React from 'react';
import ToDo from './ToDo';

export default function ToDoList({todos, checkBox}){
    console.log("todolist called with this argument"+todos);
    return  (
         todos.map(elt =>{return <ToDo key={elt.id} todoelt={elt} checkBox={checkBox}/> })
 


    )
}