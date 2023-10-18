import React from "react";
import { Toaster } from "react-hot-toast";

import styles from '../styles/Username.module.css';


export default function Recovery(){


   
    return (
<div className="container mx-auto">
    <Toaster position="top-center" reverseOrder="false"></Toaster>

<div className='flex justify-center items-center h-screen'>
<div className={styles.glass} style={{width:"50%"}}>
<div className="title flex flex-col items-center">
<h4 className='text-5xl font-bold'>Recovery</h4>
<span className='py-4 text-xl w-2/3 text-center text-gray-500'>
    Enter OTP To Recover Account
            </span>
            <form className='pt-2'>
            <div className="textbox flex flex-col items-center gap-6">

                <div className="input text-center">
                <span className='py-2 text-sm text-left text-gray-500'>
                      Enter 6 digit OTP sent to your email address.
                    </span>
                    <input className={styles.textbox} style={{width:"50%"}} type="text" placeholder='OTP' />
                </div>
              
                  <button className={styles.btn} style={{width:"50%"}} type='submit'>Sign In</button>
              </div> 

          </form>

          <div className="text-center py-4">
                <span className='text-gray-500'>Can't Get OTP? <button className='text-red-500' >Resend</button></span>
              </div>
</div>
    </div>        
    </div>
</div>
        )
}