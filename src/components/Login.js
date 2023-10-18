import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { useFormik } from "formik";
import { loginValidate } from '../helper/validate'
import { Toaster } from "react-hot-toast";

import styles from '../styles/Username.module.css';


export default function Login(){

    const formik=useFormik({
        initialValues:{
            username:'',
            password:''
        },
        validate:loginValidate,
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
<h4 className='text-5xl font-bold'>Hello Again!</h4>
<span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Login And Explore More by connecting with us.
            </span>
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                  <img src={avatar} className={styles.profile_img} alt="avatar" />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password' />
                  <button className={styles.btn} type='submit'>Let's Go</button>
              </div>

              <div className="text-center py-4">
                <span className='text-gray-500'>Not a Member <Link className='text-red-500' to="/register">SignUp Now</Link></span>
              </div>

          </form>
</div>
    </div>        
    </div>
</div>
        )
}