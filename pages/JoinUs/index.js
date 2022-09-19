import React from 'react'
import FormButtonMobile from '../../components/FormButtonMobile'
import FormButtonStructure from '../../components/FormButtonStructure'
import LoginForm from '../../components/LoginForm'
import SignupForm from '../../components/SignupForm'

export default function JoinUs() {
	

	const SignupFormMobile = () =>{
		document.getElementById('login').style.left = "-450px"
		document.getElementById('signup').style.left = "50px"
		document.getElementById('btn').style.left = "80px"
		document.getElementById('login-btn').style.color="black"
		document.getElementById('signup-btn').style.color = "white"
	}
	return (
		<div id="joinus" className='h-[900px] sm:h-screen content-center items-center flex'>
			<div id="form-box" className='w-[250px] sm:w-[380px] content-center top-10 h-[480px] items-center relative  m-auto  bg-white p-2 overflow-hidden'>
				<div className='hidden sm:block'>
				<FormButtonStructure/>
				</div>
				<div className='block sm:hidden'>
					<FormButtonMobile/>
				</div>
				<LoginForm/>
				<SignupForm/>
				
				
			</div>
		</div>
	)
}
