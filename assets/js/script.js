const btnToggle = document.querySelector(".navbar__toggle-icon");
const navbarContentItems = document.querySelector(".navbar__content-items");


function toggleItems() {
  navbarContentItems.classList.toggle('activate')
}

btnToggle.addEventListener('click', toggleItems)