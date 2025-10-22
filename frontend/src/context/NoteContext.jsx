import { Children, createContext, useEffect } from "react";
export const NoteContext = createContext();
import { useState } from "react";
import BACKEND_URL from "../api/url";


export const NoteProvider = ({children})=>{
const [notes,setNotes]=useState([]);
const [loading,setLoading]=useState(true)

const getNotes=async()=>{
    setLoading(true)
    try {
        const response=await BACKEND_URL.get("/get-notes")
        setNotes(response.data)
        
    }
    catch(error){
        console.log("Error while fetching notes",error)
    }
    finally{
        setLoading(false)
    }

}
useEffect(()=>{
    getNotes();
},[])

const createNote=async(note)=>{
    const res =await BACKEND_URL.post("/create-note",note)
    setNotes([res.data,...notes])
}

const updateNote=async(id,updateNote)=>{
    const res=await BACKEND_URL.put(`/update-note/${id}`,updateNote)
    setNotes(notes.map((note)=>(note._id===id ? res.data : note)))
}

const deleteNote=async(id)=>{
    await BACKEND_URL.delete(`/delete-note/${id}`)
    setNotes(notes.filter((note)=>note._id!==id))

}

return (
    <NoteContext.Provider value={{notes,loading,createNote,updateNote,deleteNote} }>
        {children}
    </NoteContext.Provider>
)
}
