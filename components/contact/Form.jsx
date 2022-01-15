import React from 'react'

export default function Form() {
    return (
        <div className='bg-white rounded sm:ml-10 '>
            <form  className='ml-10 my-10 mr-4 pt-10'>
             <label>Enter your name:
                   <input type="text" className='block w-full h-8 my-2 bg-blue-50 rounded ' placeholder='Enter your name...' />
              </label>
              <label>Enter your Email:
                   <input type="text" className='block w-full h-8 my-2 bg-blue-50 rounded' placeholder='Enter your Email...' />
              </label>
              <label>Enter your messege:
                   <textarea type="text" className='block w-full  my-2 bg-blue-50 rounded' placeholder='Enter your name'/>
              </label>
              <button className='bg-blue-800 text-white border py-2 px-4 rounded mb-10'>submit</button>
            </form>
        </div>
    )
}
