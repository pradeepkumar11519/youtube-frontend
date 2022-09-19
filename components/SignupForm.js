import React from 'react'

export default function SignupForm() {
  return (
    <div>
      <form id="signup" className=' absolute w-[280px]  transition-all fade-in-out left-[450px] overflow-hidden' >
					<input className='w-[200px] sm:w-full my-[5px] border-b-2 bg-transparent  outline-none py-[10px]'  type="text" id="username" name="username" placeholder='Username'/>
					<input className='w-[200px] sm:w-full my-[5px] border-b-2 bg-transparent  outline-none py-[10px]'  type="email" id="email" name="email" placeholder='Email'/>
					<input className='w-[200px] sm:w-full my-[5px] border-b-2 bg-transparent  outline-none py-[10px]' type="password" id="password" name="password" placeholder='Password'/>
					<input className='w-[200px] sm:w-full my-[5px] border-b-2 bg-transparent  outline-none py-[10px]' type="password" id="confirm_password" name="confirm_password" placeholder='Confirm Password'/>
					<button className='sm:w-[85%] py-[10px] px-[30px] block sm:mx-auto bg-gradient-to-r from-orange-600 rounded-full text-white to-yellow-500 my-10' id="submit-btn" type="submit">SIGNUP</button>
				</form>
    </div>
  )
}
