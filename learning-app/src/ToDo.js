import React from 'react';


export default function ToDO({ todoelt, checkBox }){
    console.log("toDo called with this argument"+todoelt);
    function handleClick(){
        checkBox(todoelt.id)
    }
    return(

    <div>
        <label>
            <input type='checkbox' checked= {todoelt.complete} onChange={handleClick}/>
         {todoelt.name}
         </label>
    </div>
    )
} 