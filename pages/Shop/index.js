import React from 'react'
import ShopNavbar from '../../components/ShopNavbar'
import Image from 'next/image'
import shop1 from '../../public/images/shop3.jpg'
import shop4 from '../../public/images/shop4.png'
import ShopCarousel from '../../components/ShopCarousel'
import { useRouter } from 'next/router'
import DragDiv from '../../components/DragDiv'

export default function Shop() {
	const router = useRouter()
	return (
		<div className='py-48 '>
			{/* <DragDiv/> */}
			<div className='grid grid-cols-[300px_auto]'>
				<div className='flex justify-center h-full bg-white   shadow-[0px_0px_13px_0]'>
					<ShopNavbar />
				</div>
				
				<div className=' grid grid-rows-[auto_auto] mx-10'>


					<div className='grid grid-cols-[auto_auto_auto] h-fit    '>

						<div className=' w-fit '>

							<div className=' w-[400px] h-[400px] my-auto '>
								<Image layout='responsive' src={shop4}
									className=""
									placeholder="blur" />
							</div>
						</div>
						<div className='flex justify-center  max-w-[300px] shadow-[0_0_30px_7px] p-2 shadow-black h-fit items-center my-auto'>

							<div className='mx-auto flex flex-col  items-center   my-auto  '>
								<h1 className=' justify-center mx-auto text-center font-medium text-3xl h-fit'>WELCOME TO LIGHTENING WEB STORE</h1>
								<p className='text-center my-3 h-fit'>We Make And Take Orders.Hurray You Can Design Your Styled Cloths And We Are Ready To Deliver It To You</p>
							</div>
						</div>
						<div className=' w-fit '>

							<div className=' w-[400px] h-[400px] my-auto '>
								<Image layout='responsive' src={shop4}
									className=""
									placeholder="blur" />
							</div>
						</div>
					</div>

					<div className='mx-auto my-16 py-16 border-t-4 border-black '>

						<div id="carousel" className=' w-fit  items-center flex justify-center'>
							<ShopCarousel />
						</div>
					</div>

					<div>
						cloth section
					</div>


				</div>


			</div>

		</div>
	)
}
