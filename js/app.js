document.addEventListener('DOMContentLoaded', () => {
    const mobileToggler = document.querySelector('.navbar-toggler');
    const navigation = document.querySelector(mobileToggler.getAttribute('data-target'));
  
    let dropdownToggle = document.querySelectorAll('.dropdown-toggle');
  
    mobileToggler.addEventListener('click', () => navigation.classList.toggle('collapse'))
  
    dropdownToggle.forEach((dropdown) => {
      dropdown.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        let dropdownElement = dropdown.parentElement;
        dropdownElement.classList.toggle('collapse');
        dropdown.classList.toggle('active'); // Add this line
      })
    })
  });
  