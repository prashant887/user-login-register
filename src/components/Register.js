import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { useFormik } from "formik";
import { registerValidation } from '../helper/validate'
import toast,{ Toaster } from "react-hot-toast";
import convertToBase64 from "../helper/convert";
import { registerUser } from "../helper/helper";
import styles from '../styles/Username.module.css';


export default function Register(){

    const [file, setFile] = useState()
    const navigate=useNavigate()


    const formik=useFormik({
        initialValues:{
            username:'',
            password:'user@123',
            email:'tests@example.com'
            
        },
        validate:registerValidation,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit:async value=>{
            value=await Object.assign(value,{profile:file}|| '')
            let registerPromise = registerUser(value)
            console.log("Promise Returned")
            toast.promise(registerPromise, {
                loading: 'Creating...',
                success : <b>Register Successfully...!</b>,
                error : <b>Could not Register.</b>
            });
              
              console.log("toast Done");
              registerPromise.then((result)=>{ toast.success(result) ; navigate('/username')},(error)=>{  toast.error(error)});
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
<div className={styles.glass} style={{width:"50%", paddingTop: '3em',height:"80%"}}>
<div className="title flex flex-col items-center">
<h3 className='text-5xl font-bold'>New User Registration</h3>
<span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Register Here To Explore More.
            </span>
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                <label htmlFor="profile">
                <img src={file || avatar} className={styles.profile_img} alt="avatar" />
                </label>
                <input onChange={onUpload} type="file" id="profile" name="profile"></input>
              </div>

              <div className="textbox flex flex-col items-center gap-6 ">
                  <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email' />
                  <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password' />

                  <button className={styles.btn} type='submit'>Register</button>
              </div>

              <div className="text-center py-4">
                <span className='text-gray-500'>Already Registered? <Link className='text-red-500' to="/">Login Here</Link></span>
              </div>

          </form>
</div>
    </div>        
    </div>
</div>
        )
}