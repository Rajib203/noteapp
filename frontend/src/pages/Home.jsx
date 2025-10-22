import React from 'react'
import { NoteContext } from '../context/NoteContext'
import { useContext } from 'react'
import Notecard from '../components/Notecard'

function Home() {
  const {notes,loading}=useContext(NoteContext)
  console.log(notes)

  if(loading){
    return <div className='flex justify-center items-center min-h-screen'>
      <p className='text-lg text-white'>Loading...</p>
    </div>
  }
  if(!notes || notes.length === 0){
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <p className='text-lg text-white'>No notes available..</p>
    </div>
  )
}


  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {notes.map((note)=>(<Notecard key={note._id} note={note}/>))}
    </div>
  )
}

export default Home
