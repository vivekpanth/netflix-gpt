export const checkValidData=(email,password)=>{
const isEmailValid= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
const  isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
if(!isEmailValid)
return "Email id is not valid"

if(!isPasswordValid)
return "Password  is not valid"

return null;
}
