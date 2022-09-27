import React from 'react'
import { useContext } from 'react'
import Context from '../context/context'

export default function ContactForm() {
    const {user,OrderDetails,setOrderDetails} = useContext(Context)
    return (
        <div id="contact_details" className='transition-all fade-in-out w-[600px]'>
            <div className='   rounded-md w-full mx-auto '>
                <div className=''>
                    <div className='text-center font-bold text-xl border-x-2 border-t-2 border-purple-500 text-white bg-purple-500 rounded-t-md w-full h-full'>CONTACT DETAILS</div>
                </div>
                <div className='border-2 border-purple-500 rounded-b-md h-[330px] px-4'>
                    <div className=''>
                        <div className='my-4 grid grid-cols-[200px_auto]'>
                            <label className='font-bold mx-2 text-xl my-auto'>USERNAME: </label>
                            <input id="" name=""  className='border-2 border-black
                            text-black outline-none px-2 py-2 text-xl font-medium rounded-md w-full' placeholder={user?.username} value={user?.username}  />
                        </div>
                        <div className='my-4 grid grid-cols-[200px_auto] '>
                            <label className='font-bold mx-2 text-xl my-auto'>EMAIL : </label>
                            <input id="" name="" placeholder={user?.email} className='border-2 border-black
                            text-black outline-none px-2 py-2 text-xl font-medium rounded-md w-full' value={user?.email} />
                        </div>
                        <div className='my-4 grid grid-cols-[200px_auto] '>
                            <label className='font-bold mx-2 text-xl my-auto'>PHONE NUMBER : </label>
                            <input id="" name="" placeholder="" className='border-2 border-black
                            text-black outline-none px-2 py-2 text-xl font-medium rounded-md w-full' onChange={(e)=>{
                                setOrderDetails({...OrderDetails,Phone_Number:e.target.value})
                            }}  />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
