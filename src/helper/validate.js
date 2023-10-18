import toast from 'react-hot-toast'
export async function usernameValidate(values){
    const errors=usernameVerify({},values)
}

export async function passwordValidate(values){
    const errors=passwordVerify({},values)
}


export async function loginValidate(values){
    const errors=usernameVerify({},values)
    passwordVerify({},values)
}

export async function passwordRestValidate(values){
    const errors=passwordVerify({},values)

    if(values.password !== values.confirm){
        errors.exist=toast.error("Password Not Matched....!!!")
    }
}


/** validate register form */
export async function registerValidation(values){
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;
}


/** validate profile page */
export async function profileValidation(values){
    const errors = emailVerify({}, values);
    return errors;
}


/**************************************** */
/** valiadate username */

function usernameVerify(error={},values){
    if(!values.username){
        error.username=toast.error("Username Required !!")
    }
    else if(values.username.includes(" ")){
        error.username=toast.error("Invalid Username !!")

    }
    return error;
}

/** valiadate password */
function passwordVerify(error={},values){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        error.password=toast.error("Password Required !!")
    }
    else if(values.password.includes(" ")){
        error.password=toast.error("Invalid Password !!")

    }
    else if(values.password.length < 4){
        error.password=toast.error("Password should be more than 4 chars !!")

    }
    else if(!specialChars.test(values.password)){
        error.password = toast.error("Password must have special character");
    }
    return error;
}

/** validate email */
function emailVerify(error ={}, values){
    if(!values.email){
        error.email = toast.error("Email Required...!");
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email...!")
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Invalid email address...!")
    }

    return error;
}
