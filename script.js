function verify(){
    var email = document.getElementById('d1');
    var phone = document.getElementById('d2');
    var password = document.getElementById('d3');

    var emailRE = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phoneRE = /^[0-9]{10}$/;
    var passwordRE = /^[a-zA-Z0-9]{8,}$/;

    if(!emailRE.test(email.value)){
        alert('Invalid email address');
        return false;
    }
    
    else if(!phoneRE.test(phone.value)){
        alert('Invalid phone number');
        return false;
    }
    
    else if(!passwordRE.test(password.value)){
        alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number');
        return false;
    }
    else{
        alert('Form submitted successfully');
        return true;
    }
}