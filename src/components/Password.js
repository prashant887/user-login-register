import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { useFormik } from "formik";
import { passwordValidate } from '../helper/validate'
import toast,{ Toaster } from "react-hot-toast";
import { useAuthStore,useStore } from '../store/store'
import { verifyPassword } from "../helper/helper";

import styles from '../styles/Username.module.css';


export default function Password(){

    console.log("User in Password")

    const navigate = useNavigate()
    const username=useAuthStore(state => state.auth.username);
    console.log(username)
    
    const users=useStore(state => state.users);
    console.log(users);

    /*const [{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`)
    
    
*/


    const formik=useFormik({
        initialValues:{
            password:''
        },
        validate:value=>{
            if (users.username!=='admin'){
                passwordValidate(value)
            }
        },
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit:async value=>{
            let loginPromise=verifyPassword(users.username,value.password);
            toast.promise(loginPromise, {
                loading: 'Checking...',
                success : <b>Login Successfully...!</b>,
                error : <b>Password Not Match!</b>
              });

              loginPromise.then(res => {
                toast.success(res.data);
                console.log("Auth Token Pass "+JSON.stringify(res.auth))
                 localStorage.setItem('token', res.auth);
                 console.log("Auth Token Pass Stored "+JSON.stringify(localStorage.getItem('token')))

               navigate('/profile')
              },error=>{
                toast.error(error)
              })
            
        }
        
    })
   
    return (
<div className="container mx-auto">
    <Toaster position="top-center" reverseOrder="false"></Toaster>

<div className='flex justify-center items-center h-screen'>
<div className={styles.glass} style={{width:"50%"}}>
<div className="title flex flex-col items-center">
<h4 className='text-5xl font-bold'>Welcome {users.username}</h4>
<span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore More by connecting with us.
            </span>
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                  <img src={users.profile||avatar} className={styles.profile_img} alt="avatar" />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password' />
                  <button className={styles.btn} type='submit'>Sign In</button>
              </div>

              <div className="text-center py-4">
                <span className='text-gray-500'>Forgot Password? <Link className='text-red-500' to="/recovery">Recover Now</Link></span>
              </div>

          </form>
</div>
    </div>        
    </div>
</div>
        )
}