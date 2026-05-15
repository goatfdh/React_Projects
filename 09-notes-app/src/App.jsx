import React, { useState } from 'react'


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)
    console.log(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task];
    copyTask.splice(idx,1);

    setTask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-gradient-to-br from-rose-100 via-pink-100 to-orange-100'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className=' flex gap-4 lg:w-1/2 flex-col items-start p-10'>

        <h1 className='text-3xl font-bold  text-gray-700'>Add Notes</h1>

      { /* PEHLA WALA INPUT */}
        <input 
         type="text"
         placeholder='Enter Notes Heading' 
         className='w-full px-5 bg-white border border-gray-300 focus:border-rose-300 focus:ring-2 focus:ring-rose-200  py-2 text-gray-800 border-2 font-medium rounded outline-none '
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value);
         }}
         />

      {/* DETAIL VALA INPUT */}
        <textarea
         placeholder='Write Details'
         className='w-full h-55 bg-white border border-gray-300 focus:border-rose-300 focus:ring-2 focus:ring-rose-200 text-gray-800 font-medium border-2 outline-none rounded px-5 py-2'
         value ={details}
         onChange={(e)=>{
          setDetails(e.target.value);
         }}
         />
         
         <button className=' active:scale-95 font-medium bg-rose-500 hover:bg-rose-400 text-white font-semibold shadow-md border-2 cursor-pointer w-full py-2 rounded px-5 text-gray-100 '>Add Note</button>
      </form>
      <div className=' lg:w-1/2 p-10 lg:border-l-2 bg-white/40 backdrop-blur-md gap-5' w-full>
      <h1 className='text-3xl font-bold text-gray-700'>Recent Notes</h1>
      <div className='flex flex-wrap gap-6  mt-5 h-[100] overflow-auto jusify-start'>
        {task.map(function(elem,idx){
          return <div key={idx} relative className='h-52 w-40 rounded-xl bg-cover bg-[url("https://i.pinimg.com/736x/07/08/b3/0708b3b409eb96d4d1b2fd0accc89a71.jpg")] px-4 items-start relative pt-9 pb-4 justify-between flex flex-col text-black'>
            <div>
            <h3 className='leading-tight px-3 text-lg font-bold text-gray-600'>{elem.title}</h3>
            <p className='font-medium px-3 py-3.5 text-xs leading-tight text-gray-600'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx);
            }} 
            className=' w-full cursor-pointer rounded text-gray-200 font-bold active:scale-95 py-1 ml-1 mb-1  text-xs text-white bg-rose-500 hover:bg-rose-600 text-white font-semibold shadow-md'>Delete</button>
          </div>

        })}
      </div>
    </div>
    </div>

  )
}

export default App
