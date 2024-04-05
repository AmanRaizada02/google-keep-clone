import React, { useState } from 'react'
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const CreateNote = (props) => {
    const [expand,setExpand]=useState(false)

    const [note,setNote]=useState({
        title:"",
        content:"",
    });
    
    const InputEvent=(event)=>{
        // const name=event.target.name;
        // const value=event.target.value;
        const {name,value}=event.target; 


        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,

            };
        });

    };
    const expandIt=()=>{
        setExpand(true)
    }
    const backToNormal=()=>{
        setExpand(false)
    }

const addEvent=()=>{
    props.passNote(note);
    setNote({
        title:"",
        content:"",
    });
}
  return (
    <>
        <div className="main_note" onDoubleClick={backToNormal}>
        <form>
        {expand?<input type="text" name="title" value={note.title} onChange={InputEvent} placeholder='Title' autoComplete='off'/>:null}
            <textarea rows="" name="content" column="" value={note.content} onChange={InputEvent} placeholder='write a note...' onClick={expandIt} ></textarea>
            {expand?
            <Button onClick={addEvent}>
                <AddIcon className="plus-sign"/>
            </Button>:null}
        </form>
        </div>
    </>
  )
}

export default CreateNote