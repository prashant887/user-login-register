import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { useFormik } from "formik";
import { registerValidation } from '../helper/validate'
import { Toaster } from "react-hot-toast";
import convertToBase64 from "../helper/convert";

import styles from '../styles/Username.module.css';
import extend from '../styles/Profile.module.css';


export default function Profile(){

    const [file, setFile] = useState()

    const userToken=localStorage.getItem('token');

    console.log(userToken)



    const formik=useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            mobile:'',
            email:'',
            address:''
            
        },
        validate:registerValidation,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit:async value=>{
            value=await Object.assign(value,{profile:file}|| '')
            console.log(value)
        }
    })
    /** Formik Dosnt Support File Upload so Create a Function */

    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
      } 
   
    return (
<div className="container mx-auto">
    <Toaster position="top-center" reverseOrder="false"></Toaster>

<div className='flex justify-center items-center h-screen'>
<div className={`${styles.glass} ${extend.glass}`} style={{width:"45%", paddingTop: '3em'}}>
<div className="title flex flex-col items-center">
<h3 className='text-5xl font-bold'>User Profile</h3>
<span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Update Details
            </span>
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                <label htmlFor="profile">
                <img src={file || avatar} className={`${styles.profile_img} ${extend.profile_img}`} alt="avatar" />
                </label>
                <input onChange={onUpload} type="file" id="profile" name="profile"></input>
              </div>
              <div className="textbox flex flex-col items-center gap-6 ">

              <div className="name flex w-3/4 gap-10">
              <input {...formik.getFieldProps('firstname')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='First Name' />
                  <input {...formik.getFieldProps('lastname')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Last Name' />
              </div>

              <div className="name flex w-3/4 gap-10">
              <input {...formik.getFieldProps('mobile')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Mobile' />
                  <input {...formik.getFieldProps('email')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Email' />
              </div>

              <div className="name flex w-3/4 gap-10">
              <input {...formik.getFieldProps('address')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Address' />
              </div>

                  
                  <button className={styles.btn} type='submit'>Update</button>
              </div>

              <div className="text-center py-4">
                <span className='text-gray-500'>Come Back Later? <Link className='text-red-500' to="/">Logout</Link></span>
              </div>

          </form>
</div>
    </div>        
    </div>
</div>
        )
}