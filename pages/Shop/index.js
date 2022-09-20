import React from 'react'
import ShopNavbar from '../../components/ShopNavbar'
import Image from 'next/image'
import shop1 from '../../public/images/shop3.jpg'
import shop4 from '../../public/images/shop4.png'
import Carousel from '../../components/Carousel'
import Carousel2 from '../../components/Carousel2'
export default function Shop() {
	return (
		<div className='pt-36 container'>
			
			<div className='flex'>
			<div className='flex justify-center   w-[300px] bg-white h-fit  shadow-[0px_0px_13px_0]'>
						<ShopNavbar />
				</div>
				<div className='grid grid-cols-[auto_auto_auto] mx-10  h-fit '>
					
					<div className='h-fit'>
						<div className=' w-[400px] h-[400px] my-auto'>
							<Image layout='responsive' src={shop4}
								className=""
								placeholder="blur" />
						</div>
					</div>
					<div className='mx-auto flex flex-col items-center h-fit my-auto '>
						<h1 className=' justify-center mx-auto text-center font-medium text-3xl h-fit'>WELCOME TO NAME OF YOUR SHOP</h1>
						<p className='text-center my-3 h-fit'>We Make And Take Orders.Hurray You Can Design Your Styled Cloths And We Are Ready To Deliver It To You</p>
					</div>
					<div className=' flex justify-end h-fit'>
						<div className=' w-[400px] h-[400px] my-auto'>
							<Image layout='responsive' src={shop1}
								className=""
								placeholder="blur" />
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}
