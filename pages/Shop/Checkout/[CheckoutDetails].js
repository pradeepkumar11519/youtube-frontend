import { dehydrate, QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Head from 'next/head';
import Script from 'next/script';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import ContactForm from '../../../components/ContactForm'
import CreditCard from '../../../components/CreditCard'
import PersonalDetails from '../../../components/PersonalDetails'
import Context from '../../../context/context';
import { fetchKartProducts } from '../Kart/User/[Kart]';
import Modal from 'react-modal';
import { useState } from 'react';
export default function CheckoutDetails(props) {
	const {user,OrderDetails,RazorPayDetails,IsModal,setIsModal} = useContext(Context)
	const FinalCartProducts = useQuery(['Final_Kart_Objects'], () => {
		return fetchKartProducts(props.access)
	})
	
	const {mutate} = useCartAndRazorpay()
	const onSubmit = () =>{
		let object = {}
		object['details'] = OrderDetails,
		object['token'] = props.access
		object.details['total_ordered_price'] = FinalCartProducts?.data.Users_Total_Amount
		mutate(object)
	}
	
	
	var options = {
		"key": "rzp_test_sQX1pglrS9XMaY", // Enter the Key ID generated from the Dashboard
		 // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
		"currency":"INR",
		"name": "Lightening Web",
		"description": "Test Transaction",
		// "image":,
		"order_id":RazorPayDetails?.order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
		"handler":async function (response) {
			
			OrderDetails['razorpay_order_id'] = response.razorpay_order_id
			OrderDetails['razorpay_payment_id'] = response.razorpay_payment_id
			OrderDetails['razorpay_payment_signature'] = response.razorpay_signature
			await axios.post('https://youtube-backend-youtube-backen.herokuapp.com/api/v1/handlerequest/',OrderDetails,{
				headers:{
					Authorization:'Bearer ' + props.access
				}
			})
		},
		"prefill": {
			"name":user?.username,
			"email":user?.email,
			"contact":OrderDetails.Phone_Number
		},
		"notes": {
			"address": "Razorpay Corporate Office"
		},
		"theme": {
			"color": "#3399cc"
		}
	};
	useEffect(() => {
		const Script = document.createElement("script");
		const Form = document.getElementById('donateForm');
		Script.setAttribute('data-payment_button_id', 'your id')
		Form.appendChild(Script);
		Script.setAttribute('src', 'https://checkout.razorpay.com/v1/checkout.js')


	}, [])
	
	const customStyles = {
        content: {
            top: '35%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            width: '60%',
            transform: 'translate(-40%, -10%)',
        },
        overlay: {
            position: 'fixed',
            zIndex: 1020,
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
	}
	return (
		<div className='py-32 my-24  '>
			<Modal
                    style={customStyles}
                    isOpen={IsModal}
                    ariaHideApp={false}
                    onRequestClose={() => {
                        setIsModal(false)
                    }}>
                    <div className="flex justify-between my-auto">
                        <h1 className='mx-2 font-medium text-center text-2xl my-auto'>DO YOU WANT TO CONFIRM YOUR ORDER</h1>
                        <button className='mx-2 p-2 bg-black text-white font-medium text-2xl' onClick={()=>{
							var rzpi = new Razorpay(options)
							rzpi.open()
							setIsModal(false)
						}}>CONFIRM</button>
                    </div>
                </Modal>
			<form id='donateForm'> </form>
			<div className='lg:grid grid-cols-2'>
				<div className=' w-full mx-auto flex justify-center my-10 lg:my-auto'>
					<ContactForm />

				</div>
				<div className=' w-full mx-auto flex justify-center my-10 lg:my-auto'>
					<PersonalDetails />
				</div>
			</div>
			<div>
				<button id="checkout" onClick={() => {	
					onSubmit()
					

				}}>PLACE ORDER</button>
			</div>






			{/*  */}
		</div>
	)
}


export const getServerSideProps = async ({ req, res, params }) => {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery(['Final_Kart_Objects'], () => {
		return fetchKartProducts(req.cookies.access)
	})

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			access: req.cookies.access
		}
	}
}

const fetchCartAndRazorpay = async (order_details) =>{
	
	return axios.post('https://youtube-backend-youtube-backen.herokuapp.com/api/v1/PlaceOrderThruCart/',order_details.details,{
		headers:{
			Authorization:'Bearer ' + order_details.token
		}
	}).then((response)=>{
		return response.data
	})
}


const useCartAndRazorpay = () =>{
	const {setRazorPayDetails,setIsModal,setOrderDetails,OrderDetails} = useContext(Context)
	const queryClient = useQueryClient()
	return useMutation(fetchCartAndRazorpay,{
		onSuccess:(response)=>{
			setIsModal(true)
			setRazorPayDetails(response)
			setOrderDetails({...OrderDetails,final_amount_with_gst:response.final_amount_with_gst})
		},
		onError:()=>{

		}
	})
}