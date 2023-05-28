// Function to show the loading section
function showLoadingSection() {
    document.getElementById('loading-section').style.display = 'flex';
  }
  
  // Function to hide the loading section
  function hideLoadingSection() {
    document.getElementById('loading-section').style.display = 'none';
  }
  
  // Function to start the loading animation
  function startLoadingAnimation() {
      var loadingText = document.getElementById('loading-text')
      loadingText.textContent = "You've landed on a Portfolio webpage of a Software Developer";
      setTimeout(function() {
        loadingText.classList.remove('loading-text-animation')
        var loadingText2 = document.getElementById('loading-text2')
        loadingText2.classList.add('loading-text-animation')
        loadingText2.textContent = "Loading repositories required to continue";
      }, 4000);
    setTimeout(function() {
        window.location.hash = 'welcome-section' 
        hideLoadingSection()
    }, 9500); // Hide the loading section after 9 seconds
  }
  
  // Call the function to start the loading animation
  showLoadingSection();
  startLoadingAnimation();

/*//////////////////////////////////////////////////////*/
  // Function to display the loading animation
function displayLoadingAnimation() {
    var loadingAnimation = document.getElementById('loading-animation');
    var frames = ['\\', '|', '/', '-'];
    var currentFrame = 0;
  
    setInterval(function() {
      loadingAnimation.textContent = frames[currentFrame];
      currentFrame = (currentFrame + 1) % frames.length;
    }, 200); // Change the animation speed by adjusting the interval time
  }
  
  // Call the function to display the loading animation
  displayLoadingAnimation();
/*//////////////////////////////////////////////////////*/

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

// Get all the links in the navbar
var navbarLinks = document.querySelectorAll('#navbar a');

// Function to handle scroll event
function handleScroll() {
  // Get the current scroll position
  var scrollPosition = window.scrollY;

  // Loop through each navbar link
  navbarLinks.forEach(function(link) {
    var sectionId = link.getAttribute('href');
    var section = document.querySelector(sectionId);

    if (section) {
      // Get the top position and height of the section
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;

      // Check if the section is in the viewport
      if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
        // Add the active class to the link
        link.classList.add('active-link');
      } else {
        // Remove the active class from the link
        link.classList.remove('active-link');
      }
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Call the handleScroll function initially
handleScroll();