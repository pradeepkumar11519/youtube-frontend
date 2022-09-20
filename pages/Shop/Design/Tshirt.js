import React from 'react'
import ShopNavbar from '../../../components/ShopNavbar'

import Image from 'next/image'
import {
	SketchPicker
} from 'react-color';

import { AiOutlineDown } from 'react-icons/ai'
import { useState } from 'react'
import DragDiv from '../../../components/DragDiv';

export default function Tshirt() {

	const [imagestate, setimagestate] = useState('black')
	const [uppertext, setuppertext] = useState('Upper Text')
	const [lowertext, setlowertext] = useState('Lower Text')

	const [textcolor, settextcolor] = useState({ upper: "white", lower: "white" })
	const [clicks, setclicks] = useState({ upperclick: 0, lowerclick: 0, rightclicks: 0, leftclicks: 0 })

	
	const UrlImg = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/'
	return (
		<div className='pt-36 '>
			<div className='grid grid-cols-[300px_auto]'>
				<div className='flex justify-center h-full bg-white   shadow-[0px_0px_13px_0]'>
					<ShopNavbar />
				</div>
				<div className='grid grid-row-[auto_auto] mx-10'>
					<div className='grid grid-cols-[auto_auto] w-max '>

						<div className='  w-full my-auto'>
							<div className='relative text-center w-fit'>

								<img className='z-[-10] pointer-events-none ' src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${imagestate}`} />

							</div>


							<div id="cloth-design" className='absolute top-[340px]  left-[530px]  h-[500px]   w-fit inline-block'>

								<div  className='text-center mb-20 '>
									<DragDiv header="UT" wrapper="ut">
									<div id="UT">
										<p id="upper_text" className={` text-white w-max  border-2 border-white`}>{uppertext}</p>
									</div>
									</DragDiv>
								</div>

								<DragDiv header="image" wrapper="i">
									<img className="rounded max-w-[300px] border-[6px] max-h-[400px] border-black" src="https://dummyimage.com/400x300" alt="content" />
								</DragDiv>

								<div className='text-center mt-[350px]'>
									
									<DragDiv header="LT" wrapper="lt">
										<div id="LT">
										<p id="lower_text" className={` text-white w-max border-2 border-white`}>{lowertext}</p>
										</div>
									</DragDiv>
								</div>

							</div>
						</div>


						<div className='ml-10 shadow-2xl p-5 my-10'>
							<h3 className='text-3xl text-center font-bold my-10'>Settings</h3>
							<h4 className='my-10 text-center text-xl font-bold'>Change T-SHIRT COLOR</h4>
							<div className='flex flex-wrap my-3 justify-between'>
								<button onClick={() => {
									setimagestate('white')
								}}>
									<img className='w-10 h-10 mx-3' src={`${UrlImg}white.png`} alt="white_shirt" />
								</button>

								<button onClick={() => {
									setimagestate('black')
								}}>
									<img className='w-10 h-10 mx-3' src={`${UrlImg}black.png`} alt="black_shirt" />
								</button>

								<button onClick={() => {
									setimagestate('grey')
								}}>
									<img className='w-10 h-10 mx-3' src={`${UrlImg}grey.png`} alt="grey_shirt" />
								</button>

								<button onClick={() => {
									setimagestate('blue')
								}} >
									<img className='w-10 h-10 mx-3' src={`${UrlImg}blue.png`} alt="blue_shirt" />
								</button>

								<button onClick={() => {
									setimagestate('red')
								}}>
									<img className='w-10 h-10 mx-3' src={`${UrlImg}red.png`} alt="red_shirt" />
								</button>
							</div>
							<hr />
							<h4 className='my-3 text-center text-xl font-bold'>Write Text</h4>
							<input type="text" className='outline-none border-2 border-black my-3 p-2 w-full mx-auto' placeholder='Upper Text' onChange={(e) => {
								setuppertext(e.target.value)
							}} />
							<input type="text" className='outline-none border-2 border-black my-3 p-2 w-full mx-auto' placeholder='Lower Text' onChange={(e) => {
								setlowertext(e.target.value)
							}} />
							<h4 className='my-3 text-center text-xl font-bold'>Upload Image</h4>
							<div>
								<input type="file" className='outline-none border-2 border-black my-3 p-2 w-full mx-auto' placeholder='Lower Text' />
							</div>
							<hr />



						</div>
					</div>
					<div className='shadow-2xl border-2 mb-20 p-5'>
						<h3 className='text-3xl text-center font-bold '>More Settings</h3>
						<div className='grid grid-cols-2'>
							<div className='mb-10'>
								<h4 className='my-5 text-center text-xl font-bold'>Upper Text Colour</h4>
								<div className='flex justify-center'>
									<SketchPicker color={textcolor.upper} onChange={(color) => {
										settextcolor({ ...textcolor, upper: color.hex })
										document.getElementById('upper_text').style.color = String(color.hex)
									}} />
								</div>
							</div>
							<div>
								<h4 className='my-5 text-center text-xl font-bold'>Lower Text Colour</h4>
								<div className='flex justify-center'>
									<SketchPicker color={textcolor.lower} onChange={(color) => {
										settextcolor({ ...textcolor, lower: color.hex })
										document.getElementById('lower_text').style.color = String(color.hex)
									}} />
								</div>
							</div>

							<div className='border-t-2 mx-5'>
								<h4 className='mt-10 text-center text-xl font-bold'>Upper Text Size</h4>
								<div className='flex justify-center'>

									<input type="range" min="0" max="59" className='outline-none border-2 border-black my-3 p-2 w-full mx-auto' placeholder='Lower Text' onChange={(e) => {
										
										document.getElementById('upper_text').style.fontSize = String(e.target.value) + 'px'
									}} />
								</div>
							</div>
							<div className='border-t-2 mx-5'>
								<h4 className='mt-10 text-center text-xl font-bold'>Lower Text Size</h4>
								<div className='flex justify-center'>

									<input type="range" min="0" max="59" className='outline-none border-2 border-black my-3 p-2 w-full mx-auto' placeholder='Lower Text' onChange={(e) => {
										
										document.getElementById('lower_text').style.fontSize = String(e.target.value) + 'px'
									}} />
								</div>
							</div>



						</div>
					</div>
				</div>
			</div>

		</div>
	)
}
