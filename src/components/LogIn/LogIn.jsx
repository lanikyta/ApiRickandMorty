import { Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react"
import { useState } from "react"
import { Navigate } from "react-router-dom"

const LogIn = ({setUser, user}) => {
    const [values, setValues]= useState({username: '',
password: ''})
    const toast = useToast();

    const [error, setError] = useState({})
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const error = validate(values)
        if (Object.keys(error).length === 0) {
            toast({
              title: `Welcome ${values.username}`,
              description: "We've created your account for you.",
              status: 'success',
              duration: 4000,
              isClosable: true,
            });
            setUser(values.username)
            return
          }
          if (Object.keys(error).length >= 1) {
            toast({
              title: 'Ups!',
              description: "We've an errors to create your account",
              status: 'error',
              duration: 4000,
              isClosable: true,
            });
          }
          return error
      
    }
    const validate=(values)=>{

        const error = {}
        if(values.username.length === 0){
            error.username = 'Este campo es requerido'
        }
        if(values.password.length === 0){
            error.password = 'Este campo es requerido'
        }
        setError(error)
        return error
    }
    const handleChange=(e)=>{
        setValues({...values, 
        [e.target.name]: e.target.value})
    }
    
    if(!!user){
        return <Navigate to='/profile'/>
    }
    return(
        <FormControl w='50%' mx='auto' my='10'>
            <FormLabel>Username</FormLabel>
            <Input type='text' name='username' onChange={handleChange}/>
            <FormLabel>Password</FormLabel>
            <Input type='password' name='password' onChange={handleChange}/>
            <Button onClick={handleSubmit}>Send</Button>
        </FormControl>

    )
}

export { LogIn }