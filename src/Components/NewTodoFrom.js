import React, { useState } from "react";

export default function NewTodoForm(props) {
    
    const [newItem, setNewItem] = useState("");

     function handleSubmit(e) {
       e.preventDefault();
       if (newItem === "") {
         return;
       }
       props.onSubmit(newItem);
       
       setNewItem("");
     }
     return (
       <form className="form" onSubmit={handleSubmit}>
         <div className="form-row mt-3">
           <label className="text-white text-xl font-semibold" htmlFOr="item">
             Leave a message
           </label>
           <input
             className="input mt-1 mb-3 p-1 text-black bg-blue-100 rounded w-full"
             value={newItem}
             onChange={(e) => setNewItem(e.target.value)}
             type="textbox"
             id="item"
             placeholder="Enter task"
           />
         </div>
         <button className="btn p-1 rounded bg-blue-200 w-full mb-3">
           Add
         </button>
       </form>
     );
}
