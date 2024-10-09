import React, {useState}from 'react'

export default function NewTodoForm(props){
    const[assigned, setAssigned]=useState('');
    const[description, setDescription]=useState('');
   const submitTodo= ()=>{
    if(assigned!='' && description !=''){
    props.addTodo(assigned,description);
      setAssigned('');
      setDescription('');
   }
}

    return(
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input type="text" 
                    className='form-control' 
                    required 
                    value={assigned}
                    onChange={e=>setAssigned(e.target.value)}></input>

                </div>
                <div className="mb-3">
                    <label className='form-label'>Description</label>
                    <textarea 
                    className='form-control' 
                    rows={3} 
                    required
                    value={description}
                    onChange={e=>setDescription(e.target.value)}></textarea>

                </div>
                <button className="btn btn-primary mt-3" type="Button" onClick={submitTodo}>Add Todo</button>

            </form>

        </div>
    );
}