import React from 'react';

export default function LoginForm() {;

  return(
    <div className=' grid grid-cols-1 md:grid-cols-2 grid-rows-1 fixed inset-0  p-0 m-0'>

 <div className="flex flex-col   justify-center place-items-center bg-gradient-to-r from-[#963CFF] via-[#360D3A] to-[#3D195B] text-white p-4">





  <form className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
    <h2 className=' text-purple-600 text-center px-6 py-4 font-bold font-serif'>Welcome back</h2>
<label htmlFor="username" className='text-black'>Username</label>

    <input type="text" id="username" name="username" className="border border-gray-300 rounded-md p-2 text-black mb-4 w-full"/>
    <br/>
    <label htmlFor='password' className='text-black'>Password</label>
    <input type ="password" id="password" name="password" className="border text-black border-gray-300 rounded-md p-2 mb-4 w-full"/>
    <br/>
    <button type="submit" className="flex flex-col bg-yellow-400 text-white rounded-md hover:bg-green-700 mx-auto px-6 py-3">Login</button>

</form>



 </div>
  <div className="flex flex-col  justify-center place-items-center bg-gradient-to-r from-[#00FF85] to-[#228B22] ">

    <h1 className='font-bold text-4xl text-white'>Premiere League Score Predictor 
     </h1>
     <br/> 
      <p className="text-white ">Welcome back! Sign in to see fixtures stats and your favourite teams.</p>
  </div>



    </div>






  )





}