function checkform(){
    let form = document.querySelector("#checkform");
    let name = form.name;
    let email = form.email;
    let phone = form.phone;
    
    

    let error1 = document.querySelector(".output1");
    let error2 = document.querySelector(".output2");
    let error3 = document.querySelector(".output3");

    let namelength = false;
    let namevalue = false;

    let emaillength = false;
    let emailvalue = false;

    let phonelength = false;
    let phonevalue = false;


    if(name.value.length > 0){
        namelength = true;
    }else{
        namelength = false;
    }
    if(namelength == false){
        error1.innerHTML = "UPS! Du mangler at udfylde noget.";
        error1.style.color = "#e6007e";
        name.style.borderColor = "#e6007e";
    }

    if(email.value.length > 0){
        emaillength = true;
    }else{
        emaillength = false;
    }
    if(emaillength == false){
        error2.innerHTML = "UPS! Du mangler at udfylde noget.";
        error2.style.color = "#e6007e";
        email.style.borderColor = "#e6007e";
    }

    if(phone.value.length > 0){
        phonelength = true;
    }else{
        phonelength = false;
    }
    if(phonelength == false){
        error3.innerHTML = "UPS! Du mangler at udfylde noget.";
        error3.style.color = "#e6007e";
        phone.style.borderColor = "#e6007e";
    }

    if(namelength == true && emaillength == true && phonelength == true){
        return true;
    }else{
        return false;
    }

   /* if(checkvalue == false){
        error4.innerHTML = "UPS! Du mangler at udfylde noget.";
        error4.style.color = "#e6007e";
    } */
    
    return false;
}