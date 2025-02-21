function Validation(values) {
    let error = {}

    if (values.email === "") {
        error.email = "Username is required"
    }
    else {
        error.email = ""
    }

    
    if (values.password === "") {
        error.password = "Password is required"
    }
    else{
        error.password = ""
    }

    return error;

}
export default Validation