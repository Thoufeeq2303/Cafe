import React, { useState } from 'react'

const From = () => {
    const[formdata, setFormdata] = useState({
        username:"",
        email:"",
        password:""
    })

    const[error, setError] = useState({})

    const validate = () =>{
        const newError = {}

        if(!formdata.username) newError.username = "Enter your Name"
        if(!formdata.email) newError.email = "Enter your Email"
        else if(!/\S+@\S+\.\S+/.test(formdata.email)) newError.email = "Enter a Valid Email"
        if(!formdata.password) newError.password = "Enter your Password"
        else if(formdata.password.length < 8) newError.password = "The Password must be atleast 8 Characters"
        else if(!/[A-Z]/.test(formdata.password)) newError.password = "The Password must be atleast 1 Upper Case"
        return newError
    }
    const handleChange = (e) =>{
        const{name, value} = e.target;
        setFormdata({
            ...formdata,
            [name]:value
        })
    }
    const handleSumbit = (e) =>{
        e.preventDefault()
        const validation = validate()
        if(Object.keys(validation).length === 0){
            console.log(formdata)
            setFormdata({
                username:"",
                email:"",
                password:""
            })
            setError({})
        }
        else{
            setError(validation)
        }
    }
  return (
    <div>
        <form onSubmit={handleSumbit}>
            <lable>Name</lable>
            <input type='text' placeholder='username' name='username' onChange={handleChange} value={formdata.username}/>
            {error.username && <p style={{color:"red"}}>{error.username}</p>}
            <lable>Email</lable>
            <input type='email' placeholder='email' name='email' onChange={handleChange} value={formdata.email}/>
            {error.email && <p style={{color:"red"}}>{error.email}</p>}
            <lable>Password</lable>
            <input type='password' placeholder='password' name='password' onChange={handleChange} value={formdata.password}/>
            {error.password && <p style={{color:"red"}}>{error.password}</p>}
            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default From
