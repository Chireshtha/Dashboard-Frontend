function Validation(values){
    let error = {}

    if(values.name === "")
    {
        error.name = "Name is required"
    }
    else{
        error.name = ""
    }


    if(values.email === "")
    {
        error.email = "Email is required"
    }
    else{
        error.email = ""
    }

    
    if(values.password === "")
    {
        error.password = "Password is required"
    }

    else{
        error.password = ""
    }

    return error;
}
export default Validation