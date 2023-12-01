
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
    
    /*
    const more_btns = document.querySelectorAll('.more-btn.btn.btn-blue');
    const less_btns = document.querySelectorAll('.less-btn.btn.btn-blue');
    const event_infos = document.querySelectorAll('.event-limit, .event-spots, .event-desc, .btn.btn-blue');
    const mediaQuery = window.matchMedia('(max-width: 766px)');
    
    if (mediaQuery.matches) {
      more_btns.forEach((more_btn, index) => {
        more_btn.addEventListener('click', () => {
          event_infos.forEach(event_info => {
            event_info.style.display = 'block';
          });
          more_btn.style.display = 'none';
          less_btns[index].style.display = 'inline-block';
        });
      });
    
      less_btns.forEach((less_btn, index) => {
        less_btn.addEventListener('click', () => {
          event_infos.forEach(event_info => {
            event_info.style.display = 'none';
          });
          more_btns[index].style.display = 'inline-block';
          less_btn.style.display = 'none';
        });
      });
    } else {
      event_infos.forEach(event_info => {
        event_info.style.display = 'block';
      });
    
      more_btns.forEach(more_btn => {
        more_btn.style.display = 'none';
      });
    
      less_btns.forEach(less_btn => {
        less_btn.style.display = 'none';
      });
    }
    */
    
    

  });
  