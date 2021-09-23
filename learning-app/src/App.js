import React, {useState, useRef, useEffect} from 'react';
import ToDoList from './ToDoList';
import uuidv4 from 'uuid/dist/v4'
const LOCAL_STORAGE_KEY='toDoapp.todos'
function App() {
  const [todost, setToDos]=useState([])
  const todoNameRef=useRef()
  
  //everytime epmty array is changeed(never, so when page loads/refreshed), load stored todos from storage at key
  //and settodos to that
  useEffect(()=>{
    const storedtodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedtodos)
    setToDos(storedtodos)
  }, [])
  //any time todost changes, save to local storage
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todost))}, 
  [todost])                                         
  
//toggles the checkbox for todo object passed in-gets current list of todos
function checkBox(Id){
const copyOfTodos=[...todost]
const toToggle=(copyOfTodos.find(toToggle=>toToggle.id===Id))
toToggle.complete= !toToggle.complete //set to oppposite
setToDos(copyOfTodos)
}

  //when button is clicked to add, set name to nput, create todo object, add to previous todos and display
  function handleAddToDo(e){
    console.log('handleAddoDo called')
   const name=todoNameRef.current.value
   if (name==='') return
   console.log("input name set to "+name)
   setToDos(prevToDos=>{
     return [...prevToDos, {id: uuidv4(), name: name, complete: false}]
   })
   todoNameRef.current.value=null; 
  }
 //when clear button hit, setTodos to new list of unchecked todos
  function handleClear(){
  const uncomplTodos=todost.filter(todos=>!todos.complete)
  setToDos(uncomplTodos)
  }

  //must be one element, green ones pass values back and forth
  return  (
    <> 
    <ToDoList todos={todost} checkBox={checkBox} />
    <input ref= {todoNameRef} type='text'/>
    <button onClick={handleAddToDo}>Add ToDo</button>
    <button onClick={handleClear}>Clear Complete</button>
    <div>{todost.filter(todo=>!todo.complete).length} Left to do</div>
    </> 
  )
   
}

export default App;
