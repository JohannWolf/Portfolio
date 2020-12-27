function sendForm(){

    // Storing Field Values In Variables
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Regular Expression For Email
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // Conditions
    if (name != '' && email != '' && message != '') {
    if (email.match(emailReg)) {
        console.log('Sending form to server...');
            fetch('http://34.105.65.51:3000/email', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({name:name,
                email:email,
                message:message})
            }
    ).then( function(res){
        console.log(res);
    }).catch(function(error){
        console.log(error.message);
    })
    }else{
        document.getElementById('validationMessage').innerHTML = 'Invalid email'
    }
}else{
    document.getElementById('validationMessage').innerHTML = 'All fields are required'
}

}