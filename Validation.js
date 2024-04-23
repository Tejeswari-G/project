export default function Validation(values){
    let errors={}

    let email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    let phone_pattern =  /^\d{10}$/;


    if(values.name === ""){
        errors.name="Name is Required";
    }

    if(values.email === ""){
        errors.email = "Email is required";
    }
    else if(!email_pattern.test(values.email)){
        errors.email="Email did't match";
    }


    if(values.phone === ""){
        errors.phone = "Phone number is Required";
    }
    else if(!phone_pattern.test(values.phone)){
        errors.phone = "Phone number did't match";
    }

    return errors;
}