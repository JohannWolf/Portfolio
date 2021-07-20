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
            fetch('https://formspree.io/f/mgerlpgr', {
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
        document.getElementById('validationMessage').innerHTML = 'Your message was sent successfully!'
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

window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
            document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
        } else {
            document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
        }
        });
    });
    
    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
    
    });