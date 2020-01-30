
import  {useState} from 'react';

export const useSignUpForm = (callback) => {
    
    const [inputs, setInputs] = useState({firstName:"",lastName:"",email:"",timezone:"",password1:"",password2:""});
    
    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
        callback()
      }
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs,
    };
  }