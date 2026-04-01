const header = document.querySelector("header")
const menuToggle = document.querySelector(".menu-toggle")
const menu = document.querySelector("#menu")

// função central (ESSENCIAL)
function updateHeader(){
  const isScrolled = window.scrollY > 50
  const isMenuOpen = menu.classList.contains("active")

  if(isScrolled || isMenuOpen){
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
}

// scroll
window.addEventListener("scroll", updateHeader)

// clique no menu
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active")
  updateHeader() // atualiza após abrir/fechar
})

const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 30;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});