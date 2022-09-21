import React from 'react'
import ShopNavbar from '../../../components/ShopNavbar'

import Image from 'next/image'
import {
	SketchPicker
} from 'react-color';

import { AiOutlineDown } from 'react-icons/ai'
import { useState } from 'react'
import DragDiv from '../../../components/DragDiv';
import html2canvas from 'html2canvas'

import { ref, uploadBytes, listAll, getDownloadURL ,} from 'firebase/storage'
import domtoimage from 'dom-to-image'
import { storage } from '../../config/firebaseConfig';
import { v4 } from 'uuid'
import { useEffect } from 'react';
import { useContext } from 'react';
import Context from '../../../context/context';
import * as htmlToImage from 'html-to-image';
import { FaChessKing } from 'react-icons/fa';
export default function Tshirt() {
	const { username } = useContext(Context)
	const [loading, setloading] = useState(false)
	const [usercreatedimage,setusercreatedimage] = useState(null)
	const [imagestate, setimagestate] = useState({
		imagecolor: "black",
		uppertext: "Upper Text",
		lowertext: "Lower Text",
		textcolor: { upper: 'white', lower: 'white' },
		textsize: { upper: "25px", lower: "25px" },
		textweight: { upper: "normal", lower: 'normal' },
		image: null,
		imageurl: null
	})
	console.log(imagestate.imageurl);
	const uploadImage = (e) => {
		setloading(true)
		if (e.target.files[0]) {
			console.log(e.target.files[0]);

			setimagestate({ ...imagestate, image: e.target.files[0] })

			const uploadtask = ref(storage, `GUEST/${e.target.files[0].name + v4()}`)
			uploadBytes(uploadtask, e.target.files[0]).then((snapshot) => {
				getDownloadURL(snapshot.ref).then((url) => {
					console.log(url);
					setimagestate({ ...imagestate, imageurl: url })
					setloading(false)
				}).catch((error) => {
					console.log(error);
				})
				alert('images uploaded')

			}).catch((error) => {
				console.log(error);
			})


		}

	}
	const UploadUserCreatedImage = (base_64,filename) =>{
		const createdImage = firebase.storage().ref(storage,`GUEST_CREATED` + filename +  v4()).putString(base_64,'base64').then((snapshot)=>{
			alert('user created image uploaded')
		})
		
	}
	useEffect(() => {
		if (loading) {
			console.log('loading', loading);
		}
	}, [])



	// console.log('imagestate',imagestate);
	const UrlImg = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/'
	return (
		<div className='pt-36 '>

			<div className='grid grid-cols-[300px_auto]'>
				<div className='flex justify-center h-full bg-white   shadow-[0px_0px_13px_0]'>
					<ShopNavbar />
				</div>
				
				{loading ? (
					<h1 className='text-center pt-32'>Loading</h1>
				) : (
					<div className='grid grid-row-[auto_auto] mx-10'>
						<div className='grid grid-cols-[auto_auto] w-max '>

							<div className='  w-full my-auto '>
								<div  className='border-2 border-green-500 w-fit '>
									<div className='relative text-center w-fit'>

										<img crossOrigin='true' className='z-[-10] pointer-events-none ' src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${imagestate.imagecolor}`} />
										

									</div>
									<div id="preview-image">
										
									</div>


									<div  className='absolute top-[340px]  left-[520px]  transition-all fade-in-out  h-[400px] overflow-hidden   w-[320px] inline-block'>
										<div id="clothDesign" className='border-2 border-dashed overflow-hidden border-gray-100/0 hover:border-gray-100/100 h-full'>
											<div className='text-center mb-20 z-[10]'>
												<DragDiv header="UT" wrapper="ut">
													<div id="UT">
														<p id="upper_text" className={` text-white w-max z-[10] p-1  border-2 border-dashed border-gray-100/0 hover:border-gray-100/100`}>{imagestate.uppertext}</p>
													</div>
												</DragDiv>
											</div>
											<div className='z-[-10]'>
											<DragDiv header="image" wrapper="i">
												<img className="rounded max-w-[300px] max-h-[200px] z-[-10]   " src={imagestate.imageurl ? imagestate.imageurl : `https://dummyimage.com/300x200`} alt="content" />
											</DragDiv>
											</div>
											<div className='text-center z-[10] mt-[350px]'>

												<DragDiv header="LT" wrapper="lt">
													<div id="LT">
														<p id="lower_text" className={`text-white w-max z-[10] p-1  border-2 border-dashed border-gray-100/0 hover:border-gray-100/100`}>{imagestate.lowertext}</p>
													</div>
												</DragDiv>
											</div>

										</div>
									</div>
								</div>
							</div>


							<div className='ml-10 shadow-2xl p-5 my-10'>
								<h3 className='text-3xl text-center font-bold my-10'>Settings</h3>
								<h4 className='my-10 text-center text-xl font-bold'>Change T-SHIRT COLOR</h4>

								<div className='flex flex-wrap my-3 justify-between'>
									<button onClick={() => {
										setimagestate({ ...imagestate, imagecolor: 'white' })
									}}>
										<img className='w-10 h-10 mx-3' src={`${UrlImg}white.png`} alt="white_shirt" />
									</button>

									<button onClick={() => {
										setimagestate({ ...imagestate, imagecolor: 'black' })
									}}>
										<img className='w-10 h-10 mx-3' src={`${UrlImg}black.png`} alt="black_shirt" />
									</button>

									<button onClick={() => {
										setimagestate({ ...imagestate, imagecolor: 'grey' })
									}}>
										<img className='w-10 h-10 mx-3' src={`${UrlImg}grey.png`} alt="grey_shirt" />
									</button>

									<button onClick={() => {
										setimagestate({ ...imagestate, imagecolor: 'blue' })
									}} >
										<img className='w-10 h-10 mx-3' src={`${UrlImg}blue.png`} alt="blue_shirt" />
									</button>

									<button onClick={() => {
										setimagestate({ ...imagestate, imagecolor: 'red' })
									}}>
										<img className='w-10 h-10 mx-3' src={`${UrlImg}red.png`} alt="red_shirt" />
									</button>
								</div>


								<hr />
								<h4 className='my-3 text-center text-xl font-bold'>Write Text</h4>
								<input type="text" className='outline-none border-2 border-black my-3 p-2 w-full mx-auto' placeholder='Upper Text' onChange={(e) => {
									setimagestate({ ...imagestate, uppertext: e.target.value })
								}} />
								<input type="text" className='outline-none border-2 border-black my-3 p-2 w-full mx-auto' placeholder='Lower Text' onChange={(e) => {
									setimagestate({ ...imagestate, lowertext: e.target.value })
								}} />
								<h4 className='my-3 text-center text-xl font-bold'>Upload Image</h4>
								<div>
									<input type="file" className='outline-none border-2 border-black my-3 p-2 w-full mx-auto' placeholder='Lower Text' onChange={(e) => {
										uploadImage(e)

									}} />
								</div>
								<hr />
								<button className='w-full text-white bg-blue-600 my-6 hover:bg-blue-600/90 p-2' onClick={() => {
									var element = document.querySelector('#clothDesign');
									htmlToImage.toJpeg(element).then((data) => {
										console.log(data)
										var link = document.createElement('a')
										console.log(data)
										link.download = "my-image.png"
										link.href = data;
										console.log(link.href)
										link.click();
									})
									

								}}>SAVE</button>



							</div>
						</div>
						<div className='shadow-2xl border-2 mb-20 p-5'>
							<h3 className='text-3xl text-center font-bold '>More Settings</h3>
							<div className='grid grid-cols-2'>
								<div className='mb-10'>
									<h4 className='my-5 text-center text-xl font-bold'>Upper Text Colour</h4>
									<div className='flex justify-center'>
										<SketchPicker color={imagestate.textcolor.upper} onChange={(color) => {
											setimagestate({
												...imagestate, textcolor: {
													...imagestate.textcolor,
													upper: color.hex
												}
											})
											document.getElementById('upper_text').style.color = String(color.hex)
										}} />
									</div>
								</div>
								<div>
									<h4 className='my-5 text-center text-xl font-bold'>Lower Text Colour</h4>
									<div className='flex justify-center'>
										<SketchPicker color={imagestate.textcolor.lower} onChange={(color) => {
											setimagestate({
												...imagestate, textcolor: {
													...imagestate.textcolor,
													lower: color.hex
												}
											})
											document.getElementById('lower_text').style.color = String(color.hex)
										}} />
									</div>
								</div>

								<div className='border-t-2 mx-5'>
									<h4 className='mt-10 text-center text-xl font-bold'>Upper Text Size</h4>
									<div className='flex justify-center'>

										<input type="range" min="0" max="59" className='outline-none border-2 border-black my-3 p-2 w-full mx-auto' placeholder='upper Text' onChange={(e) => {
											console.log(e.target.value)
											setimagestate({
												...imagestate, textsize: {
													...imagestate.textsize,
													upper: e.target.value
												}
											})
											document.getElementById('upper_text').style.fontSize = String(e.target.value) + 'px'
										}} />
									</div>
								</div>
								<div className='border-t-2 mx-5'>
									<h4 className='mt-10 text-center text-xl font-bold'>Lower Text Size</h4>
									<div className='flex justify-center'>

										<input type="range" min="0" max="59" className='outline-none border-2 border-black my-3 p-2 w-full mx-auto' placeholder='Lower Text' onChange={(e) => {
											setimagestate({
												...imagestate, textsize: {
													...imagestate.textsize,
													lower: e.target.value
												}
											})
											document.getElementById('lower_text').style.fontSize = String(e.target.value) + 'px'
										}} />
									</div>
								</div>


								<div className='border-t-2 mx-5'>
									<h4 className='mt-10 text-center text-xl font-bold'>Upper Text Font Weight</h4>
									<div className='flex justify-center'>

										<select className='outline-none border-2 border-black my-3 p-2 w-full mx-auto' placeholder='Upper Text' onChange={(e) => {
											setimagestate({
												...imagestate, textweight: {
													...imagestate.textweight,
													upper: e.target.value
												}
											})
											document.getElementById('upper_text').style.fontWeight = String(e.target.value)
										}} >
											<option value="normal">Medium</option>
											<option value="lighter">Lighter</option>
											<option value="bold">Bold</option>
											<option value="bolder">Bolder</option>

										</select>
									</div>
								</div>


								<div className='border-t-2 mx-5'>
									<h4 className='mt-10 text-center text-xl font-bold'>Lower Text Font Weight</h4>
									<div className='flex justify-center'>

										<select className='outline-none border-2 border-black my-3 p-2 w-full mx-auto' placeholder='Lower Text' onChange={(e) => {
											setimagestate({
												...imagestate, textweight: {
													...imagestate.textweight,
													lower: e.target.value
												}
											})
											document.getElementById('lower_text').style.fontWeight = String(e.target.value)
										}} >
											<option value="normal">Medium</option>
											<option value="lighter">Lighter</option>
											<option value="bold">Bold</option>
											<option value="bolder">Bolder</option>

										</select>
									</div>
								</div>



							</div>
						</div>
					</div>
				)}
			</div>



		</div>
	)
}
