function sendMessage() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('success-message');
  
    // Validate form inputs (you can add more validation here)
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      return;
    }
  
    // Reset form fields
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  
    // Show success message
    successMessage.classList.remove('d-none');
    setTimeout(() => {
      successMessage.classList.add('d-none');
    }, 3000);
  }


  let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");
  
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-80px";
    }
    prevScrollPos = currentScrollPos;
  };