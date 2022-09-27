import React from 'react'
import { useState } from 'react'

export default function CreditCard() {
    const [CreditCardState,setCreditCardState] = useState({number:'',name:'',expiry:'',cvc:'',focus:''})
  return (
    <div id="creditcard">
        <Cards number={CreditCardState.number} name={CreditCardState.name} expiry={CreditCardState.expiry} cvc={CreditCardState.cvc} focused={CreditCardState.focus}  />
      <form>
            <input type="tel" name="number" placeholder='Card Number' value={CreditCardState.number} onChange={(e)=>{
                setCreditCardState({...CreditCardState,number:e.target.value})
            }} 
             onFocus={(e)=>{
                setCreditCardState({...CreditCardState,focus:e.target.name})
             }}
            />
            <input type="text" name="name" placeholder='Name' value={CreditCardState.name} onChange={(e)=>{
                setCreditCardState({...CreditCardState,name:e.target.value})
            }} 
             onFocus={(e)=>{
                setCreditCardState({...CreditCardState,focus:e.target.name})
             }}
            />
            <input type="text" name="expiry" placeholder='MM/YY Expiry' value={CreditCardState.expiry} onChange={(e)=>{
                setCreditCardState({...CreditCardState,expiry:e.target.value})
            }} 
             onFocus={(e)=>{
                setCreditCardState({...CreditCardState,focus:e.target.name})
             }}
            />
            <input type="tel" name="cvc" placeholder='CVC' value={CreditCardState.cvc} onChange={(e)=>{
                setCreditCardState({...CreditCardState,cvc:e.target.value})
            }} 
             onFocus={(e)=>{
                setCreditCardState({...CreditCardState,focus:e.target.name})
             }}
            />
      </form>
    </div>
  )
}
