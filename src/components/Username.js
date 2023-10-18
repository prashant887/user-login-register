import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { useFormik } from "formik";
import { usernameValidate } from '../helper/validate'
import toast,{ Toaster } from "react-hot-toast";
import { authenticateUser } from "../helper/helper";
import { useAuthStore,useStore } from "../store/store";
import styles from '../styles/Username.module.css';


export default function Username(){

    const setUsername = useAuthStore(state => state.setUsername);
    const username=useAuthStore(state => state.auth.username);
    const setUserDetails = useStore(state=>state.setUserStore);
    const users=useStore(state => state.users);

    /*useEffect (()=>console.log("In UserName ::"+username+" user "+JSON.stringify(users)))*/

  
  
    const navigate = useNavigate();


    const formik=useFormik({
        initialValues:{
            username:''
        },
        validate:usernameValidate,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit:async value=>{
            let registerPromise = authenticateUser(value.username)
            toast.promise(registerPromise, {
                loading: 'Validating...',
                success : <b>Successfully...!</b>,
                error : <b>Could not FindUser.</b>
              });

              
            registerPromise.then(
                (result)=>{ 
                    console.log({username:result.username});
                    setUsername(value.username);
                    setUserDetails({username:result.username,userId:result.userId,profile:result.avtar});

                toast.success("User [ "+result.username+" ]") ; 
                navigate('/password')
            },
            (error)=>{  
                toast.error(error)}
                );


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
              Explore More by connecting with us.
            </span>
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                  <img src={avatar} className={styles.profile_img} alt="avatar" />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
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