import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { useFormik } from "formik";
import { passwordRestValidate } from '../helper/validate'
import { Toaster } from "react-hot-toast";

import styles from '../styles/Username.module.css';


export default function Reset(){

    const formik=useFormik({
        initialValues:{
            password:'',
            confirm:''

        },
        validate:passwordRestValidate,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit:async value=>{
            console.log(value)
        }
    })
   
    return (
<div className="container mx-auto">
    <Toaster position="top-center" reverseOrder="false"></Toaster>

<div className='flex justify-center items-center h-screen'>
<div className={styles.glass} style={{width:"50%"}}>
<div className="title flex flex-col items-center">
<h4 className='text-5xl font-bold'>Reset Password</h4>
<span className='py-4 text-xl w-2/3 text-center text-gray-500'>
    Enter New Password
            </span>
            <form className='py-20' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password' />
                  <input {...formik.getFieldProps('confirm')} className={styles.textbox} type="password" placeholder='Confirm Password' />

                  <button className={styles.btn} type='submit'>Reset</button>
              </div>

          </form>
</div>
    </div>        
    </div>
</div>
        )
}