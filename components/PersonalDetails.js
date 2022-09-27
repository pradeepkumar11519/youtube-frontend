import React, { useContext } from 'react'
import Context from '../context/context'

export default function PersonalDetails() {
    const {setOrderDetails,OrderDetails} = useContext(Context)
  return (
    <div id="personal_details" className='w-[600px]'>
      <div className='   rounded-md w-full mx-auto my-20 md:my-auto '>
                <div className=''>
                    <div className='text-center font-bold text-xl border-x-2 border-t-2 border-purple-500 text-white bg-purple-500 rounded-t-md w-full h-full'>SHIPPING DETAILS</div>
                </div>
                <div className='border-2 border-purple-500 rounded-b-md h-full px-4'>
                    <div className=''>
                        <div className='my-4 grid grid-cols-[250px_auto]'>
                            <label className='font-bold text-xl mx-2 my-auto' >SHIPPING ADDRESS: </label>
                            <textarea type='text' id="address" name="address" placeholder="" className='border-2 border-black outline-none px-2 py-2 text-xl font-medium rounded-md w-full' onChange={(e)=>{
                                setOrderDetails({...OrderDetails,address:e.target.value})
                            }}/>
                        </div>
                        <div className='my-4 grid grid-cols-[250px_auto] '>
                            <label className='font-bold text-xl mx-2 my-auto'>CLOSEST LANDMARK : </label>
                            <input type="text" id="landmark" name="landmark" placeholder="" className='border-2 border-black outline-none px-2 py-2 text-xl font-medium rounded-md w-full' onChange={(e)=>{
                                setOrderDetails({...OrderDetails,landmark:e.target.value})
                            }}/>
                        </div>
                        <div className='my-4 grid grid-cols-[250px_auto] '>
                            <label className='font-bold text-xl mx-2 my-auto'>PINCODE : </label>
                            <input type="number" id="pincode" name="pincode" placeholder="" className='border-2 border-black outline-none px-2 py-2 text-xl font-medium rounded-md w-full' onChange={(e)=>{
                                setOrderDetails({...OrderDetails,pincode:e.target.value})
                            }}/>
                        </div>
                        <div className='my-4 grid grid-cols-[250px_auto] '>
                            <label className='font-bold text-xl mx-2 my-auto'>CITY : </label>
                            <input type="text" id="city" name="city" placeholder="" className='border-2 border-black outline-none px-2 py-2 text-xl font-medium rounded-md w-full' onChange={(e)=>{
                                setOrderDetails({...OrderDetails,city:e.target.value})
                            }}/>
                        </div>
                        <div className='my-4 grid grid-cols-[250px_auto] '>
                            <label className='font-bold mx-2 my-auto text-xl'>STATE : </label>
                            <select  id="state" name="state" placeholder="" className='border-2 border-black outline-none px-2 py-2 text-xl font-medium rounded-md w-full' onChange={(e)=>{
                                setOrderDetails({...OrderDetails,state:e.target.value})
                            }}>
                                <option>KARNATAKA</option>
                                <option>KERALA</option>
                                <option>TAMIL NADU</option>
                                <option>ANDHRA PRADESH</option>
                                <option>MADHYA PARADEH</option>
                                <option>MAHARASTRA</option>
                                <option>ODISHA</option>
                            </select>
                        </div>
                    
                    </div>
                </div>
            </div>
    </div>
  )
}
