import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo1 from '../public/images/logo1.jpg'
import { AiFillHome } from 'react-icons/ai'
import { FaUserFriends,FaBars } from 'react-icons/fa'
import Head from 'next/head'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import OffCanvasNavbar from './OffCanvasNavbar'

export default function Navbar() {
	const router = useRouter()
	console.log(router.pathname);
	return (

		<div id="navbar" className='h-fit z-[10]  w-full m-0 fixed bg-white top-0 left-0 right-0'>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Asap+Condensed&family=Russo+One&display=swap" rel="stylesheet" />
			</Head>
			<div className='bg-teal-600 text-white text-center py-1'>Website Made By Pradeep</div>
			<div className='hidden lg:grid grid-cols-3  py-8'>



				<div className=' '>
					<ul className='hidden lg:flex justify-start '>
						<li className='  mx-2 '>

							<Link href="/"><a className={`${router.pathname === "/" ? "text-black" : ""} text-xl hover:border-t-4 transition-all fade-in-out hover:border-teal-500 w-full h-full p-1`}>HOME</a></Link>

						</li>
						<li className='  mx-2 '>
							<Link href="/JoinUs"><a className={`${router.pathname === "/JoinUs" ? "text-black" : ""} text-xl hover:border-t-4 transition-all fade-in-out hover:border-teal-500 w-full h-full p-1`}>JOIN US</a></Link>
						</li>
						<li className='  mx-2  '>
							<Link href="/Videos"><a className={`${router.pathname === "/Videos" ? "text-black" : ""} text-xl hover:border-t-4 transition-all fade-in-out hover:border-teal-500 w-full h-full p-1`}>VIDEOS</a></Link>
						</li>
						<li className='  mx-2 '>
							<Link href="/Shop"><a className={`${router.pathname === "/Shop" ? "text-black" : ""} text-xl hover:border-t-4 transition-all fade-in-out hover:border-teal-500 w-full h-full p-1`}>SHOP</a></Link>
						</li>

					</ul>
				</div>




				{/* Logo Section  */}
				<div className=' mx-auto flex ' id="logo">


					{/* logo image  */}
					{/* <div className='w-12 h-12'>
						<Image className='rounded-md' src={logo1} placeholder="blur" />
					</div> */}


					{/* logo text  */}

					<div id="logotext" className='my-auto mx-auto text-3xl font-medium text-center'>

						LIGHTENING WEB.

					</div>
				</div>




				<div className=' '>
					<ul className='hidden lg:flex justify-end '>
						<li className='  mx-2 '>

							<Link href="/ChatRoom"><a className={`${router.pathname === "/ChatRoom" ? "text-black" : ""} text-xl hover:border-t-4 transition-all fade-in-out hover:border-teal-500 w-full h-full p-1`}>CHATROOM</a></Link>

						</li>
						<li className='  mx-2 '>
							<Link href="/About"><a className={`${router.pathname === "/About" ? "text-black" : ""} text-xl hover:border-t-4 transition-all fade-in-out hover:border-teal-500 w-full h-full p-1`}>ABOUT</a></Link>
						</li>
						<li className='  mx-2  '>
							<Link href="/Contact"><a className={`${router.pathname === "/Contact" ? "text-black" : ""} text-xl hover:border-t-4 transition-all fade-in-out hover:border-teal-500 w-full h-full p-1`}>CONTACT</a></Link>
						</li>
						<li className='  mx-2 '>
							<Link href="#"><a className='text-xl hover:border-t-4 transition-all fade-in-out hover:border-teal-500 w-full h-full p-1'>LOGOUT</a></Link>
						</li>

					</ul>
				</div>

			</div>
			<div className='flex lg:hidden justify-between py-4'>
				<div id="logotext" className='   font-medium my-auto'>

					<p className='mx-3 flex flex-wrap break-all w-fit sm:text-xl md:text-2xl'>LIGHTENING WEB</p>

				</div>
				<div className='mx-2 my-auto  p-2'>
					<button className='p-1 ring-4 ring-opacity-50 ring-black rounded-md'>
					<FaBars className='w-6 h-6'/>
					</button>
				</div>
			</div>
			{/* <OffCanvasNavbar /> */}
		</div>
	)
}
